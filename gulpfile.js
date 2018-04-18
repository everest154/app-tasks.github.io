'use strict';
var gulp = require('gulp');
var path = require('./gulp.path')();
var del = require('del');
var flags = require('yargs').argv;
var browserSync = require('browser-sync').create();
var $ = require('gulp-load-plugins')({
    lazy: true
});

// console.log($);

/**
 * Task 'serve'
 * starts server from client folder - path.client
 * runs - 'wiredep', 'watch'
 */
var serve = require(path.tasks.serve)(gulp, browserSync, path);

/**
 * Task 'sass'
 * compiles all scss from - path.sass
 * and puts compiled file to - path.build.css
 */
var compileSass = require(path.tasks.sass)(gulp, browserSync, $.sass, log, path);

/**
 * Task 'watch'
 * watches files and reloads browser if files was changed,
 * watches paths - path.sass, path.html, path.js
 */
var watch = require(path.tasks.watch)(gulp, browserSync.reload, path);

/**
 * Task 'vet'
 * validation js files with JSHint and JSCS,
 * js files - path.js
 */
var vet = require(path.tasks.vet)(gulp, $, log, flags, path);

/**
 * Task 'del-styles'
 * deleting all compiled css in folder,
 * folder - path.css
 */
var delStyles = require(path.tasks.delStyles)(gulp, deleting, log, path);

/**
 * Task 'wiredep'
 * wire up all bower dep and app js css into file,
 * file - path.index
 * runs - 'sass'
 */
var wiredep = require(path.tasks.wiredep)(gulp, $, log, path);

/**
 * Task 'images'
 * Minify images with imagemin,
 * files - path.images
 */
var images = require(path.tasks.images)(gulp, $.imagemin, log, path);

/**
 * Task 'fonts'
 * Copying fonts to build folder,
 * files - path.fonts
 */
var fonts = require(path.tasks.fonts)(gulp, log, path);

/**
 * Task 'templatecache'
 * replacing all html on templatecache module
 * file - path.build.folder
 */
var templatecache = require(path.tasks.templatecache)(gulp, log, $, path);

/**
 * Task 'optimize'
 * Creating final version of index.html and optimizing the js, css.
 * file - path.index, destenation folder - path.build.folder
 * runs - 'wiredep', 'templatecache'
 */
var optimize = require(path.tasks.optimize)(gulp, log, $, browserSync, flags, path);

/**
 * Task 'build-clean'
 * Deleting build folder,
 * folder - path.build.folder
 */
var buildClean = require(path.tasks.buildClean)(gulp, deleting, path);

/**
 * Task 'build'
 * Building the app
 * runs 'build-clean', 'fonts', 'images', 'optimize'
 */
var build = require(path.tasks.build)(gulp, log);

gulp.task('default', ['serve']);

function deleting(path) {
    log('Deleting ' + path);
    return del(path);
}

function log(msg) {
    if (typeof msg !== 'string') {
        msg = 'Use string as argument';
    }
    $.util.log($.util.colors.yellow(msg));
}
