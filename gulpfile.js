var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

//task para chamar o sass
gulp.task('sass', function(){
    return sass('/sass/*.sass')
});

//task default
gulp.task('default', function(){
 
});