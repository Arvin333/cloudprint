var gulp = require('gulp');

var gulp = require('gulp'),
    less = require('gulp-less');

gulp.task('testLess', function () {
    gulp.src(['less/main.less'])
        .pipe(less())
        .pipe(gulp.dest('css'));
});

gulp.task('testWatch', function () {
    gulp.watch('less/*.less', ['testLess']); //������less�ļ������ı�ʱ������testLess����
});