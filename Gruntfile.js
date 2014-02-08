/* global module:false, require:false */
module.exports = function(grunt) {
	'use strict';
	require('time-grunt')(grunt);
	require('jit-grunt')(grunt, {
		lint: 'grunt-contrib-jshint',
	});

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		path: {
			js: './dev/js',
			dest: './build/js'
		},
		jshint: {
			options: {
				jshintrc: '.jshintrc',
				force: true
			},
			dev: {
				src: ['Gruntfile.js', '<%= path.js %>/*.js']
			},
			prod: {
				src: '<%= path.js %>/*.js'
			}
		},
		uglify: {
			build: {
				expand: true,
				cwd: '<%= path.js %>',
				src: '*.js',
				dest: '<%= path.dest %>'
			}
		},
		watch: {
			js: {
				files: ['Gruntfile.js', '<%= path.js %>/*.js'],
				tasks: ['newer:jshint:dev', 'uglify:build'],
				options: {
					livereload: true,
					nospawn: true
				}
			}
		}
	});

	grunt.registerTask('default', ['dev']);
	grunt.registerTask('dev', ['watch']);
	grunt.registerTask('test', ['jshint:prod']);
};
