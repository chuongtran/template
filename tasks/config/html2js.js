/**
* HTML2JS is a Grunt plugin that takes all of your template files and
* places them into JavaScript files as strings that are added to
* AngularJS's template cache. This means that the templates too become
* part of the initial payload as one JavaScript file. Neat!
*/

module.exports = function(grunt) {
	grunt.config.set('html2js', {
		app: {
			options: {
				base: 'assets/app',
				// changing the module name here will be set as the angular module name of for the template cache
				// So in this case, our code will use 'templates-app' as the module name
				module: 'templates-app',
        watch: true,
        jade:{}
			},
			files: {
        '.tmp/public/app/templates-app.userPage.js':  require('../pipeline').templateFilesToInject
			}
		}
	});

	grunt.loadNpmTasks('grunt-html2js');
};

