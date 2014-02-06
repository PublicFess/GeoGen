#!/usr/bin/env node

var path = require('path');

process.env.NODE_ENV = 'production';

var app = require('../app');

require('bigfoot').assets.compile(app);

console.log('All done!');

process.exit(0);