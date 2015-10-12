var gulp = require('gulp');
var jasmine = require('gulp-jasmine-phantom');
var Game = require("./src/javascripts/bowling-app");

gulp.task('default', function () {
    return gulp.src('lib/spec/bowlingSpec.js')
        .pipe(jasmine());
});