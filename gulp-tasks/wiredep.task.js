module.exports = function (gulp, $, log, path) {
    'use strict';
    gulp.task('wiredep', ['sass'], function () {
        var options = {
            relative: true
        };

        log('Wire up app js, css and bower components into ' + path.index);

        return gulp
            .src(path.index)
            .pipe($.wiredep())
            .pipe($.inject(gulp.src(path.js.app), options))
            .pipe($.inject(gulp.src(path.css + '/*.css'), options))
            .pipe(gulp.dest(path.client));
    });
};
