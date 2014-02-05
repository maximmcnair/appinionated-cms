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
  var ReviewSchema = new Schema({
    title:
    { type: String
    }
  , published:
    { type: Boolean
    }
  , review:
    { type: String
    }
  , colorBg:
    { type: String
    }
  , colorText:
    { type: String
    }
  , hrefStore: 
    { type: String
    }
  , images: 
    { type: Array
    }
  })

  /**
   * Methods
   */
  ReviewSchema.methods = {

  }

  connection.model('Review', ReviewSchema)

  ReviewModel = connection.model('Review')

  ReviewModel.findOne({ title: 'Film Alphabets'}, function (err, doc){
   if(doc === null){
      var newReview = new ReviewModel({
        title: 'Film Alphabets'
      , review: 'Built by Wildish & Synth Media, Film Alphabets quizzes your movie knowledge of different decades and genres with custom illustrations of an A to Z selection of that area.Using an hangman style guessing mechanic, Film Alphabets offers fun gameplay for all age ranges.'
      , colorBg: 'e83e40'
      , colorText: 'ffffff'
      , hrefStore: 'https://itunes.apple.com/gb/app/film-alphabets/id661150816?mt=8'
      , published: true
      })

      newReview.save(function (err, project) {
        if(err) console.log(err)
        console.log(project)
      })
    }
  })

  ReviewModel.findOne({ title: 'Tall Chess'}, function (err, doc){
   if(doc === null){
      var newReview = new ReviewModel({
        title: 'Tall Chess'
      , review: 'A beautiful and simple multiplayer chess game, Balitmore’s Friends of the Web, have hand crafted each individual Chess piece and matched them with superb animations that will keep you playing for hours.'
      , colorBg: '86AD46'
      , colorText: 'ffffff'
      , hrefStore: 'https://itunes.apple.com/gb/app/tall-chess/id635361464?mt=8'
      , published: true
      })

      newReview.save(function (err, project) {
        if(err) console.log(err)
        console.log(project)
      })
    }
  })

}