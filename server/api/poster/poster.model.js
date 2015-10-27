'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PosterSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Poster', PosterSchema);