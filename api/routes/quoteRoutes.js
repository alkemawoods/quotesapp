'use strict';
module.exports = function(app) {
  var quote = require('../controllers/quoteController');

  app.route('/quote')
    .get(quote.getRandomQuote)
};
