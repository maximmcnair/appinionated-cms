module.exports = function (app, options) {
  var logger = options.logger
    , connection = options.connection
    , ReviewModel = connection.model('Review')
    , url = '/api/review'

  logger.info('Setting up home routes')

  // GET Projects
  app.get(url, function (req, res) {
    ReviewModel.find({}, function (err, reviews) {
      if(err) return res.json(err, 400)
      return res.json(reviews, 201)
    })
  })

  // GET Project
  app.get(url + '/:reviewId', function (req, res) {
    ReviewModel.findById(req.params.reviewId, function (err, review) {
      if(err) return res.json(err, 400)
      return res.json(review, 201)
    })
  })

}