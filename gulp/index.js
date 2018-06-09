'use strict';

/** 
 * Breaks out all the tasks into individual files.
 * Gets list of tasks from './gulp/config' and requires the appropriate task files
 * from './gulp/tasks', passing them shared parameters
 */

var gulp 	= require('gulp'),
	plugins = require('gulp-load-plugins')(),
	config 	= require('./config'),
	tasks 	= config.tasks;
	
module.exports = function() {
    tasks.forEach(function(taskName) {
        gulp.task(taskName, function() {
			return require('./tasks/' + taskName)(gulp, config, plugins);
		});
    });

    return gulp;
};