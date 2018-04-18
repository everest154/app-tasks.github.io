module.exports = function (gulp, imagemin, log, path) {
    'use strict';
    gulp.task('images', function () {
        var options = {
            optimizationLevel: 5
        };

        log('Coping and minifying images to ' + path.build.images + ' folder');

        return gulp
            .src(path.images)
            .pipe(imagemin(options))
            .pipe(gulp.dest(path.build.images));
    });
};
