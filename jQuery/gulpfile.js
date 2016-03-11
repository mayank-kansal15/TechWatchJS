var gulp       = require('gulp');
var less       = require('gulp-less');


gulp.task('compile-less', function() {
    gulp.src('./src/assets/less/site.less')
        .pipe(less())
        .pipe(gulp.dest('./public/css'));
});

/* Task to watch less changes */
gulp.task('watch-less', function() {
    gulp.watch('./src/assets/less/**/*.less' , ['compile-less']);
});

//Copy JS files from src/assets/vendor to
gulp.task('copyfiles', function() {
    gulp.src('./src/assets/fonts/**/*.{ttf,woff,woff2,eot,svg}')
        .pipe(gulp.dest('./public/fonts/'));

    gulp.src('./src/assets/vendor/**/*.js')
        .pipe(gulp.dest('./public/js/'));

});

gulp.task('build', [ 'copyfiles' ,'compile-less' ]);
// 'watch', 'watch-less',
gulp.task('default', ['copyfiles','compile-less', 'watch-less']);
