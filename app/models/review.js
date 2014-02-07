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
      , review: '<p>Built by <a href="http://www.wildishandco.co.uk/">Wildish </a>&amp; <a href="http://www.synthmedia.co.uk/">Synth Media, </a>Film Alphabets quizzes your movie knowledge of different decades and genres with custom illustrations of an A to Z selection of that area. </p><p>Using an hangman style guessing mechanic, Film Alphabets offers fun gameplay for all age ranges.</p>'
      , colorBg: 'e83e40'
      , colorText: 'ffffff'
      , hrefStore: 'http://clkuk.tradedoubler.com/click?p=23708&a=2334711&url=https%3A%2F%2Fitunes.apple.com%2Fgb%2Fapp%2Ffilm-alphabets%2Fid661150816%3Fmt%3D8%26partnerId%3D2003'
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
      , review: '<p>A beautiful and simple multiplayer chess game, Balitmore&#8217;s <a href="http://friendsoftheweb.com/">Friends of the Web, </a>have hand crafted each individual Chess piece and matched them with superb animations that will keep you playing for hours.</p>'
      , colorBg: '86AD46'
      , colorText: 'ffffff'
      , hrefStore: 'http://clkuk.tradedoubler.com/click?p=23708&a=2334711&url=https%3A%2F%2Fitunes.apple.com%2Fgb%2Fapp%2Ftall-chess%2Fid635361464%3Fmt%3D8%26uo%3D4%26partnerId%3D2003'
      , published: true
      })

      newReview.save(function (err, project) {
        if(err) console.log(err)
        console.log(project)
      })
    }
  })

  ReviewModel.findOne({ title: 'Duolingo'}, function (err, doc){
   if(doc === null){
      var newReview = new ReviewModel({
        title: 'Duolingo'
      , review: '<p>Offering free courses in Spanish, English, French, German, Portuguese, Italian. Duolingo creates a gamified experience for learning a new language, incorporating speaking, writing and listening for a well rounded learning experience.</p>'
      , colorBg: '1CB0F6'
      , colorText: 'ffffff'
      , hrefStore: 'http://clkuk.tradedoubler.com/click?p=23708&a=2334711&url=https%3A%2F%2Fitunes.apple.com%2Fgb%2Fapp%2Fduolingo-learn-languages-for%2Fid570060128%3Fmt%3D8%26partnerId%3D2003'
      , published: true
      })

      newReview.save(function (err, project) {
        if(err) console.log(err)
        console.log(project)
      })
    }
  })

  ReviewModel.findOne({ title: 'Rechner'}, function (err, doc){
   if(doc === null){
      var newReview = new ReviewModel({
        title: 'Rechner'
      , review: '<p>Touted as "the world\'s first gesture based calculator" Rechner uses swipe gestures to trigger mathematical operations. Swipe left for addition, right for subtraction.</p><p>Designed by <a href="http://bergerfohr.com/">Berger & F&ouml;hr, </a>the only changed I\'d like to see them add would be the option to add your own custom color.</p>'
      , colorBg: 'FCFC02'
      , colorText: '454545'
      , hrefStore: 'http://clkuk.tradedoubler.com/click?p=23708&a=2334711&url=https%3A%2F%2Fitunes.apple.com%2Fus%2Fapp%2Frechner-calculator%2Fid508837827%3Fmt%3D8%26partnerId%3D2003'
      , published: true
      })

      newReview.save(function (err, project) {
        if(err) console.log(err)
        console.log(project)
      })
    }
  })

}