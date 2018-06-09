'use strict';

module.exports = function(gulp, config) {
    return gulp.src(config.html.src)
        .pipe(gulp.dest(config.html.dist));
} 