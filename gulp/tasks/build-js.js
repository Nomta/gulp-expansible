'use strict';
	
module.exports = function(gulp, config) {
	gulp.start('browserify');
	if (config.js.vends) 
		gulp.start('concat-js');
} 