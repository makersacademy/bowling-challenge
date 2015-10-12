var gulp = require('gulp');
var jasmine = require('gulp-jasmine-phantom');

gulp.task('default', function () {
    return gulp.src('lib/spec/bowlingSpec.js')
        .pipe(jasmine());
});