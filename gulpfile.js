const gulp = require('gulp'),
      livereload = require('gulp-livereload');


gulp.task('watch',function () {
    livereload.listen();
    gulp.watch('./*',livereload.reload)
})