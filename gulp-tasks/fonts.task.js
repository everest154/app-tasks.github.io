module.exports = function (gulp, log, path) {
    'use strict';
    gulp.task('fonts', function () {
        log('Coping fonts to ' + path.build.folder + ' folder');

        return gulp
            .src(path.fonts)
            .pipe(gulp.dest(path.build.fonts));
    });
};
