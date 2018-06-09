'use strict'

/**
 * Fills up the config with the settings from the *-config.json files
 *
*/

var config 			= require('./gulpfile-config'),
	pathsSrc 		= require('./paths-config'),
	paths 			= pathsSrc.root;
	
	paths.assets 	= pathsSrc.assets,
	paths.maps 		= pathsSrc.maps;


var dirs = ['js', 'css', 'html', 'imgs'];

dirs.forEach(function(dir) {
	paths[dir] = configurate(dir);
});

function configurate(dir) {
	var srcDir		= pathsSrc[dir],
		output		= srcDir.outputFileName || '',
		index		= srcDir.indexFileName 	|| '',
		vends		= srcDir.vendorsDirName || '',
		ext			= srcDir.ext 			|| '',
		dir			= srcDir.dirName 		|| '';

	var dirConfig	= {
			src:	 paths.inputDir  + dir + '**/*' + ext,
			dist:	 paths.outputDir + dir
		};
	
	if (index) 
		dirConfig.entry = dir === 'html' ? 
			paths.inputDir + index : 
			paths.inputDir + dir + index;
			
	if (vends) 
		dirConfig.vends = {
			src: paths.inputDir + vends + '**/*' + ext,
			output: vends.slice(0, -1) + ext
		}
	
	if (output) dirConfig.output = output;
	
	return dirConfig;
}

for (var key in paths)
	if (paths.hasOwnProperty(key))
		config[key] = paths[key];

module.exports = config;
