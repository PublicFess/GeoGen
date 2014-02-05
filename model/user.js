'use strict';

var mongoose = require('mongoose');

var User = mongoose.Schema({

  firstName: {
    type: String,
    required: true
  },

  secondName: {
    type: String,
    required: true
  },

  lastName: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    set: function(value) {
      return value.trim().toLowerCase();
    },
    validate: function(value) {
      return /^.+@.+$/.test(value);
    }
  }
});

module.exports = mongoose.model('User', User);