module.exports = function (gulp, deleting, log, path) {
    'use strict';
    gulp.task('delstyles', function () {
        log('Deleting all css in ' + path.css + ' folder');
        return deleting(path.css + '/**/*.css');
    });
};
