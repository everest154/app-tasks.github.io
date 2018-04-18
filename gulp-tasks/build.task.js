module.exports = function (gulp, log) {
    'use strict';

    gulp.task('build', ['build-clean'], function () {
        log('Building the app');

        return gulp.start(['fonts', 'images', 'optimize']);
    });
};
