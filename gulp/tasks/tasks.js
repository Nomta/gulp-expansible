'use strict';

/** 
 * Displays tasks list
 */

module.exports = function(gulp, config) {
	console.log('\n');
	config.tasks.forEach(function(task) {
		console.log('\t', task);
	});
	console.log('\n');
}
