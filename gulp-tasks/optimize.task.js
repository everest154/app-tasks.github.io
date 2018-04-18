module.exports = function (gulp, log, $, bs, flags, path) {
    'use strict';

    gulp.task('optimize', ['wiredep', 'templatecache'], function () {
        var templatecache = path.build.folder + path.templatecache;
        var sourceOptions = {
            read: false
        };
        var htmlOptions = {
            empty: true
        };
        var injectOptions = {
            starttag: '<!-- inject-templates:js -->',
            ignorePath: 'build/',
            addRootSlash: false
        };

        log('Optimizing the js, css, html');

        return gulp
            .src(path.index)
            .pipe($.plumber())
            .pipe($.inject(
                gulp.src(templatecache, sourceOptions),
                injectOptions))
            .pipe($.useref())
            .pipe($.if('app.js', $.ngAnnotate()))
            .pipe($.if('*.js', $.uglify()))
            .pipe($.if('*.css', $.csso()))
            .pipe($.if('*.html', $.minifyHtml(htmlOptions)))
            .pipe(gulp.dest(path.build.folder))
            .pipe($.notify({
                onLast: true,
                message: 'Deployed code!'
            }))
            .on('end', function () {
                if (flags.serve) {
                    bs.init({
                        server: {
                            baseDir: path.build.folder
                        }
                    });
                }
            });
    });
};
