/**
 * Module dependencies.
 */
var mongoose = require('mongoose')
  , Schema = mongoose.Schema

module.exports = function (logger, connection) {
  logger.info('Setting up user model')

  /**
   * Review Schema
   */
  var FileSchema = new Schema({
        modificationDate: {type: Date}
      , name: {type: String}
      , size: {type: Number}
      , type: {type: String}
      , filename: {type: String}
      , userId: {type: String}
      })

  /**
   * Methods
   */
  FileSchema.methods = {

  }

  connection.model('File', FileSchema)

}