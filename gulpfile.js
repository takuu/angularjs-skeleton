var gulp = require('gulp'),
  connect = require('gulp-connect'),
  eslint = require('gulp-eslint');

// Html task
gulp.task('html', function() {
  gulp.src('*.html')
  .pipe(connect.reload());
});

gulp.task('lint', function () {
    // Note: To have the process exit with an error code (1) on
    //  lint error, return the stream and pipe to failOnError last.
    return gulp.src(['./app/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

//Js task
gulp.task('js', function() {
  gulp.src('./app/*/**.js')
  .pipe(connect.reload());
});

// Watch our changes
gulp.task('watch', function(){
  //html
  gulp.watch(['*.html'], ['html']);
  gulp.watch(['./app/*/**.js'], ['js']);
});

gulp.task('connect', function() {
  connect.server({
    root: '.',
    livereload: true
  });
});

// Start the tasks
gulp.task('default', ['connect','watch']);
