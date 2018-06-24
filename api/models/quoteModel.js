'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var QuoteSchema = new Schema({
  quote: {
    type: String,
    required: 'Please enter a quote.'
  },
  author: {
    type: String,
    required: 'Please enter the author.'
  },
});

module.exports = mongoose.model('Quotes', QuoteSchema);
