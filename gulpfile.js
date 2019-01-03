var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
let cleanCSS = require('gulp-clean-css');
var pipeline = require('readable-stream').pipeline;

gulp.task('html', (cb) => {
    return gulp.src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('src'));
    cb();
});


gulp.task('css', (cb) => {
    return gulp.src('src/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('src'));
    cb();
});

