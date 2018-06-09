'use strict';

var browserSync = require('browser-sync');

module.exports = function(gulp, config) {
	browserSync(config.browserSync);
}