module.exports = function (app, options) {
  var logger = options.logger
    , connection = options.connection
    , ReviewModel = connection.model('Review')
    , url = '/api/review'

  logger.info('Setting up home routes')

  // GET Projects
  app.get(url, function (req, res) {
    var query = {published: true}
    if(req.isAuthenticated())
      query = {}

    ReviewModel.find(query, '', {skip: req.query.offset, limit: req.query.limit }, function (err, reviews) {
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

  // Post Project
  app.post(url, function (req, res) {
    if (req.isAuthenticated()) {
      var newReview = new ReviewModel(req.body)
      newReview.save(function (err) {
        if(err) res.json(err, 404)
        res.json(newReview, 201)
      })
    } else {
      res.json(401)
    }
  })

  // Update Project
  app.put(url, function (req, res) {
    if (req.isAuthenticated()) {
      ReviewModel.findById(req.body._id, function (err, review) {
        if(err) return res.json(err, 404)
        if(review){
          var key
          for (key in req.body) {
            review[key] = req.body[key]
          }
          review.save(function (err) {
            if(err) res.json(err, 404)
            res.json(review, 201)
          })
        }
      })
    } else {
      res.json(401)
    }
  })

}