'use strict';

var pipe = require('multipipe');
	
module.exports = function(gulp, config, plugins) {

	return gulp.src(config.js.entry)
		.pipe(plugins.plumber())
		.pipe(plugins.cond(
			process.env.NODE_ENV == 'development', 
			pipe(
				plugins.sourcemaps.init(), 
				plugins.jshint(), 
				plugins.jshint.reporter('default'), 
				plugins.bro(), 
				plugins.sourcemaps.write(config.maps)
			),
			pipe(
				plugins.bro(),
				plugins.uglify(),
				plugins.rename({ suffix: '.min' })
			)
		))
		.pipe(gulp.dest(config.js.dist));
} 