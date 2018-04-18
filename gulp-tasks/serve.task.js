module.exports = function (gulp, bs, path) {
    'use strict';
    gulp.task('serve', ['wiredep', 'watch'], function () {
        bs.init({
            server: {
                baseDir: path.client
            }
        });
    });
};
