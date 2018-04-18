module.exports = function (gulp, log, $, path) {
    'use strict';

    gulp.task('templatecache', function () {
        var cacheOptions = {
            module: 'app',
            standAlone: false
        };
        var htmlOptions = {
            empty: true
        };

        log('Creating AngularJS $templatecache');

        return gulp
            .src(path.templatecacheHtml)
            .pipe($.minifyHtml(htmlOptions))
            .pipe($.angularTemplatecache(
                path.templatecache,
                cacheOptions
            ))
            .pipe(gulp.dest(path.build.folder));
    });
};
