module.exports = function (gulp, reload, path) {
    'use strict';
    gulp.task('watch', function () {
        gulp.watch(path.html).on('change', reload);
        gulp.watch(path.js.app).on('change', reload);
        gulp.watch(path.sass, ['sass']);
    });
};
