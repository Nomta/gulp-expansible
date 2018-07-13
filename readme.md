# gulp-extendable

Boilerplate using Gulp, Browserify, and any other tools you may need now or later. 
Inspired by Dan Tello's post [Gulp + Browserify: The Everything Post](https://www.viget.com/articles/gulp-browserify-starter-faq/).

The boilerplate has an initial set of standard tasks and a lot of settings that allow you to expand it.
So you can use the boilerplate with various additional tools and plugins - just enable them as soon as you need.

*<sub>Gulp version: 3.9.1</sub>*  
*<sub>ECMAScript 5</sub>*

### Contents
- [Initial set of tools](#initial-set-of-tools)
- [File paths](#file-paths)
- [Commands](#commands)
- [Advanced setup](#advanced-setup)
- [Paths](#paths)
- [Tasks](#tasks)
- [Service tasks](#service-tasks)
- [Service files](#service-files)
- [License](#license)  

## Initial set of tools

There are tasks for processing js, css and html files and images in the initial set of necessary tasks and tools.

#### js

Files are built by the Browserify. Legasy libraries are added via concatenation. Plugins: gulp-bro, gulp-concat.

#### css

The boilerplate uses both the stylus preprocessor and poststylus, that is the postcss, adapted for the stylus, 
in order to avoid re-parsing files and make their processing as fast as possible. Plugins: gulp-stylus, poststylus, postcss plugins.

#### Images

To process images, the gulp-imagemin is used.

#### Resources that do not need to be processed

Unprocessed files, such as fonts, are simply copied to the output directory. Later, only the modified files will be recopied.

#### Watching files and live reloading

In the development environment, file changes are tracked and Browser-Sync reloads the browser when changes are made.
 
#### Processing options depending on the environment

Development
- code linting
- source map record
- watching files
- live reloading

Production
- code minification 
- babelify 

### File paths

Input: `src/`  
Output: `dist/`

Put all the files in the input 'src/' directory, and you will find them in the output 'dist/' directory:

| Type | Input | Output |
| --- | --- | --- |
| js  | `js/index.js` and `libs/` as directory  <br> for legasy libraries (optionally) | `js/index.js` and `js/libs.js` \|  <br> `js/index.min.js` and `js/libs.min.js` |
| css | `css/main.styl` | `css/main.css` \| `css/main.min.css` |
| html | `index.html` | `index.html` |
| images | `imgs/` | `imgs/` |
| fonts | `fonts/` | `fonts/` |  


### Commands

#### Basic commands

run in development environment (default task): `gulp dev` or `gulp`  
simple building without watching and live reloading: `gulp build`  
run in production environment: `gulp prod`  
clear the output directory: `gulp clean`  

#### [Service commands](#service-tasks)

display a list of registered tasks: `gulp tasks`  
display common config object: `gulp config`  

*[back to top](#gulp-extendable)*  

## Advanced setup

### Config settings

To expand or change the boilerplate, use the `gulp/config/` directory. It contains two json files: `paths-config` and `gulpfile-config`. They prescribe the settings.
`paths-config` specifies paths to the resources, and `gulpfile-config` defines other gulp settings, such as postcss plugins or browser-sync options.

### Paths

Paths options are specified in the `config/paths-config.json`. Make sure that all folder names always end with a slash.

#### Assets

List the names of folders with unprocessed resources in the "assets" list.

#### Source Maps

Specify the path to the source map folder in the "maps". If false, source maps will be inline.

### Tasks

Tasks are located in the files in the `gulp/tasks/` directory.

If you want to register a new task, create it in a separate js file in this directory. The file should be named the same as the task.
Then add the task name to the "tasks" property in `config/gulpfile-config.json`. The property stores a list of all the tasks, both enabled and disabled.
You can enable or disable a task directly in `gulpfile.js` (in the 'build' task or wherever you need).

### Service tasks

In addition to the routine work tasks, there are service tasks in the `gulp/tasks/` directory, for displaying information about the current settings.

These are: 
- 'tasks' - is used to display all the tasks from `config/gulpfile-config.json`, and
- 'config' - is used to display the common configuration object data.

### Service files

The rest of the files should not be edited, since they serve to transform data for more convenient work.

`gulp/index.js` requires all tasks which names are listed in `tasks` property in the `config/gulpfile-config.json`.
`gulp/config/config.js` converts data from json files and merges them into one config object. This object is used then to transfer internal data between files.

*[back to top](#gulp-extendable)*  

## License
This project is available under the [MIT](https://opensource.org/licenses/mit-license.php) license.  