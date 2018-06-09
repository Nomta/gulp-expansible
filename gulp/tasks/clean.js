'use strict';

var del = require('del');

module.exports = function(gulp, config) {
    return del.sync(config.outputDir);
}