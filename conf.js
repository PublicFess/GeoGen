'use strict';

var path = require('path');

var conf = require('./conf');

exports.id = 'geogen';
exports.port = process.env.PORT || 50111;
exports.domain = 'geogen.dev';
exports.schema = process.env.SSL ? 'https' : 'http';
exports.cdnDomain = 'cdn.' + exports.domain;

exports.viewsPath = __dirname + '/views';
exports.publicPath = __dirname + '/public';
exports.assetsPath = __dirname + '/assets';

exports.assets = {
  global: [
    '/css/main.css',
    '/css/font-awesome.css',

    '/js/kinetic.js'
  ]
};

exports.session = {
  secret: 'privateproject',
  ttl: 600
};

exports.auth = {
  model: require('./model/user')
};

exports.locales = ['ru'];

exports.redis = {
  host: '127.0.0.1',
  port: 6391,
  pass: 'redis4(rfei)'
};

exports.mongo = {
  url: 'mongodb://localhost/geogen'
};