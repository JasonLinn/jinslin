const gulp = require('gulp'),
      livereload = require('gulp-livereload'),
       sass = require('gulp-sass'),
       autoprefixer = require('gulp-autoprefixer');


gulp.task('watch',function () {
    livereload.listen();
    gulp.watch('./*',livereload.reload);
    gulp.watch('sass/**/*.+(scss|sass)',['sass']);
})


gulp.task('sass', function () {
  return gulp.src('sass/**/*.+(scss|sass)')
    .pipe(sass().on('error', sass.logError))
    // .pipe(plumber())
    .pipe(sass({
            outputStyle: 'expanded', // compact , expanded, nested
            precision: 6,
            comments: true
        }))
    .pipe(autoprefixer('last 3 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('public/css/'))
});


gulp.task('default', ['watch']);
