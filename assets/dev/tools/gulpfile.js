var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    scss = require('gulp-sass');


var JS_DEV_FILES = "../js/**/*.js",
    JS_BUILD_DIRECTORY = "../../build/js/";

var SCSS_DEV_FILES = "../scss/**/*.scss",
    MAIN_SCSS_DEV_FILE = "../scss/main.scss",
    CSS_BUILD_DIRECTORY = "../../build/css/";


gulp.task('compress-scss', function() {
    gulp.src(MAIN_SCSS_DEV_FILE)
        .pipe(scss())
    	.pipe(gulp.dest(CSS_BUILD_DIRECTORY))
});

gulp.task('compress-js', function() {
    gulp.src(JS_DEV_FILES)
        .pipe(uglify())
        .pipe(gulp.dest(JS_BUILD_DIRECTORY))
});

gulp.task('core-watch', function() {
    gulp.watch(SCSS_DEV_FILES, ['compress-scss']);
    gulp.watch(JS_DEV_FILES, ['compress-js']);
});

gulp.task('default', ['core-watch', 'compress-js', 'compress-scss']);
