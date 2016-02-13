var gulp = require('gulp');
var sass = require('gulp-sass');



gulp.task('sass', function () {
    gulp.src('style/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('style'))
});


gulp.task('start', [], function () {
    gulp.watch('style/*.scss', ['sass']);
});

