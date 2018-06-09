'use strict';

module.exports = function(gulp, config, plugins) {
	config.assets.forEach(function(dir) {
		return gulp.src(config.inputDir + dir + '/**/*')
			.pipe(plugins.changed(config.outputDir + dir))
			.pipe(gulp.dest(config.outputDir + dir))
	});
} 

