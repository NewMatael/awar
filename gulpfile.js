var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

//task para chamar o sass
var sass = require('gulp-ruby-sass');

gulp.task('sass', function() {
    gulp.src('sass/*.sass')
    .pipe(gulp.dest('css'));
});