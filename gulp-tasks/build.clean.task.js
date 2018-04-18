module.exports = function (gulp, deleting, path) {
    'use strict';
    gulp.task('build-clean', function () {
        return deleting(path.build.folder);
    });
};
