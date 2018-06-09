'use strict';

/** 
 * To minimize the output file, you can use the postcss-csso from 'postcss for production' plugins list:
 *
 * >	pipe( 
 * >		plugins.stylus(stylusOptions(config.plugins.postcssForProd)),
 * >		// ...instead gulp-csso                     ---------------
 * >    	plugins.rename({ suffix: '.min' })
 * >    )
 *
 * However, it does not interact correctly with the Stylus (in terms of error output), so the gulp-csso is used here.
 * 
 */
 
var pipe 		= require('multipipe'),
	poststylus	= require('poststylus');
	
module.exports = function(gulp, config, plugins) {

	gulp.src(config.css.entry)
		.pipe(plugins.plumber())
		.pipe(plugins.cond(
			process.env.NODE_ENV == 'development', 
			pipe(
				plugins.sourcemaps.init(), 
				plugins.stylus(stylusOptions(config.plugins.postcss)),
				plugins.sourcemaps.write(config.maps)
			),
			pipe( 
				plugins.stylus(stylusOptions(config.plugins.postcss)),
				plugins.csso(),
				plugins.rename({ suffix: '.min' })
			)
		))
		.pipe(gulp.dest(config.css.dist));
} 

function stylusOptions(postcssPlugins) {
	return {
		'include css': true,
		use: [
			poststylus(postcssPlugins)
		]
	}
};