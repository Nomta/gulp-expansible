'use strict';

var pipe = require('multipipe');
	
module.exports = function(gulp, config, plugins) {

	gulp.src(config.js.vends.src)
		.pipe(plugins.plumber())
		.pipe(plugins.concat(config.js.vends.output))
		.pipe(plugins.cond(
			process.env.NODE_ENV == 'production', 
			pipe(
				plugins.uglify(),
				plugins.rename({ suffix: '.min' })
			)
		)) 
		.pipe(gulp.dest(config.js.dist));
} 