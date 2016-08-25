var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee'),
  	browserify = require('gulp-browserify'),
    compass = require('gulp-compass'),
	  concats = require('gulp-concat');

var coffeeSources = ['components/coffee/tagline.coffee'];
var jsSources = ['components/scripts/*.js'];
var sassSources = ['components/sass/style.scss'];

gulp.task('coffee', function() {
  gulp.src(coffeeSources)
    .pipe(coffee({ bare: true })
      .on('error', gutil.log))
    .pipe(gulp.dest('components/scripts'))
});

gulp.task('js', function() {
  gulp.src(jsSources)
    .pipe(concats('script.js'))
	.pipe(browserify())
    .pipe(gulp.dest('build/developement/js'))
});