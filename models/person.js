const mongoose = require('mongoose');

const Person = mongoose.model('Person', {
  name: String,
  hometown: String,
  favoriteMovie: String
});

module.exports = Person;
