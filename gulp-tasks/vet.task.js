module.exports = function (gulp, $, log, flags, path) {
    'use strict';
    var repParams = {
        verbose: true
    };

    gulp.task('vet', function () {
        var isSuccess = true;
        var number = 1;

        log('Validation js files with JSHint and JSCS');

        return gulp
            .src(path.js.all)
            .pipe($.if(flags.files, $.print(function (filepath) {
                return 'File validation(' + number++ + '): ' + filepath;
            })))
            .pipe($.jscs())
            .pipe($.jshint())
            .pipe($.jscsStylish.combineWithHintResults())
            .pipe($.jshint.reporter('jshint-stylish'), repParams)
            .pipe($.jshint.reporter('fail'))
            .on('error', function () {
                isSuccess = false;
            })
            .on('end', function () {
                if (isSuccess) {
                    log('Validation has completed successfully!');
                }
            });
    });
};
