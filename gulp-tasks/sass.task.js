module.exports = function (gulp, bs, sass, log, path) {
    'use strict';
    gulp.task('sass', function () {
        log('Compiling scss to css');
        return gulp.src(path.sass)
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest(path.css))
            .pipe(bs.stream());
    });
};
