module.exports = function () {
    'use strict';
    var client = './app/client/';
    var build = './build/';
    var gulpTasks = './gulp-tasks/';

    var path = {
        client: client,

        /**
         * build
         */
        build: {
            folder: build,
            fonts: build + 'content/fonts/',
            images: build + 'content/images/',
            styles: build + 'content/css/'
        },

        /**
         * template cache
         */
        templatecache: 'templates.js',
        templatecacheHtml: [],

        /**
         * gulps tasks
         */
        tasks: {
            serve: gulpTasks + 'serve.task',
            sass: gulpTasks + 'sass.task',
            watch: gulpTasks + 'watch.task',
            vet: gulpTasks + 'vet.task',
            delStyles: gulpTasks + 'del.styles.task',
            wiredep: gulpTasks + 'wiredep.task',
            images: gulpTasks + 'images.task',
            fonts: gulpTasks + 'fonts.task',
            buildClean: gulpTasks + 'build.clean.task.js',
            optimize: gulpTasks + 'optimize.task.js',
            build: gulpTasks + 'build.task.js',
            templatecache: gulpTasks + 'templatecache.task.js'
        },

        /**
         * javascript paths
         */
        js: {
            all: [
                './*.js',
                './gulp-tasks/*.js',
                client + '**/*.js',
                '!' + client + 'bower_components/**/*.js'
            ],
            app: [
                client + '**/*.module.js',
                client + '**/*.js',
                '!' + client + 'bower_components/**/*.js'
            ]
        },

        /**
         * styles
         */
        sass: client + '**/*.scss',
        css: client + 'content/css',

        /**
         * fonts
         */
        fonts: [
            client + 'bower_components/font-awesome/fonts/*.*',
            client + 'bower_components/bootstrap/dist/fonts/*.*'
        ],

        /**
         * images
         */
        images: client + 'content/images/**/*.+(jpg|png|jpeg|gif|svg)',

        /**
         * html
         */
        html: client + '**/*.html',
        index: client + 'index.html'
    };

    path.templatecacheHtml.push(path.html);
    path.templatecacheHtml.push('!' + path.index);

    return path;
};
