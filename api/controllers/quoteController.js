'use strict';

var mongoose = require('mongoose'),
  Quote = mongoose.model('Quotes');

exports.getRandomQuote = function(req, res) {
  Quote.find({}, function(err, quotes) {
    if (err)
      res.send(err);
    var randQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.json(randQuote);
  });
};

exports.addQuote = function(req, res) {
  var newQuote = new Quote(req.body);
  newQuote.save(function(err, quote) {
    if(err)
      res.send(err);
    res.json(quote);
  });
};
