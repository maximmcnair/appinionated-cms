module.exports = function (app, options) {
  var logger = options.logger
    , fs = require('fs')
    , connection = options.connection
    , FileModel = connection.model('File')
    , url = '/api/file/upload'

  logger.info('Setting up file routes')

  app.post(url, function (req, res){
    var oldPath = req.files.file.ws.path
      , userId = req.user._id
      , filename = userId + '_' + req.files.file.originalFilename
      , newPath = __dirname + '/../../public/uploads/' + filename


    logger.info('newPath', newPath)

    fs.rename(oldPath, newPath, function (err) {
      logger.error(err)
      logger.info('susa')
      if (err === null) {
        var file = {
          modificationDate: req.files.file.modifiedDate || new Date()
        , name: req.files.file.name || "???"
        , size: req.files.file.size || 0
        , type: req.files.file.type || "???"
        , filename: filename
        , userId: req.user._id
        }
        doc = new FileModel(file)

        doc.save(function (err) {
          var retObj = {
            meta: {
              "action": "upload"
            , 'timestamp': new Date()
            , filename: __filename
            }
          , doc: doc
          , err: err
          , path: '/uploads/' + filename
          }
          if(!err){
            console.log('file upload success', retObj)
            return res.send(retObj)
          }
        })
      }
    })
  })


}