var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
    return gulp.src('sass/*.sass')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function(){
	browserSync.init({
		server: true
	});
	gulp.watch('sass/*.sass', ['sass']);
	gulp.watch("*.html", browserSync.reload);
	gulp.watch("js/*.js", browserSync.reload);
});

gulp.task('default', ['serve']);
