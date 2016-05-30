////////////////////////////////////////////
// Drifter Gulpfile
// Version 0.2.0
////////////////////////////////////////////

'use strict';

/**
 * Load dependencies
 */
 var path = require('path');
var gulp          = require('gulp'),
    $             = require('gulp-load-plugins')();

/**
 * Configuration
 */
var config = {
  src: {
    less:       'bootstrap/**/*.less',
    templates:  '**/*.html',
  },
  dest: {
    css:        'stylesheets',
  },
  autoprefixer: {
    browsers:   ['last 2 versions'],
    cascade:    false,
  },
};


/*----------------------------------------*\
  TASKS
\*----------------------------------------*/

/**
 * Watching files for changes & serve
 */
gulp.task('watch', ['less'], function() {
  gulp.watch(config.src.less, ['less']);
});

/**
 * Compile Sass into CSS
 * Add vendor prefixes with Autoprefixer
 */
gulp.task('less', function() {
  return gulp.src(config.src.less)
    .pipe($.less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe($.autoprefixer(config.autoprefixer))
    .pipe(gulp.dest(config.dest.css));
});

gulp.task('default', ['watch']);
