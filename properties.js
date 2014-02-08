var _ = require('lodash')
  , path = require('path')

  , baseProperties =
    { port: 4100
    , root: __dirname
    , session:
      { secret: 'dayz-G0n3-b____ai' }
    , db: 'mongodb://localhost/appinionated'
    , dbOptions:
      { native_parser: true }
    }

  , properties =
    { development:
      { port: 4100
      , db: 'leonardo:y82gT7B1u8EMq5t@troup.mongohq.com:10041/appinionated'
      }
    }


module.exports = function () {
  var env = process.env.NODE_ENV || 'development'
  return _.extend({ environment: env }, baseProperties, properties[env])
}