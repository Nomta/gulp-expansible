'use strict';	
	
var imagemin = require('gulp-load-plugins')({
	pattern: ['imagemin-*'],
	replaceString: /^(imagemin)(-|\.)/
});

module.exports = function(gulp, config, plugins) {
    return gulp.src(config.imgs.src)
		.pipe(plugins.changed(config.imgs.dist))
		.pipe(plugins.imagemin(
			[
				imagemin.pngquant({ 	
					quality: '70-80'
				}),
				plugins.imagemin.jpegtran({
					progressive: true
				}),
				imagemin.mozjpeg({ 		
					quality: 78
				}),
				imagemin.svgo({ plugins: [
					{ removeViewBox: false }
				] })
			],
			{verbose: true}
		))
        .pipe(gulp.dest(config.imgs.dist));
}