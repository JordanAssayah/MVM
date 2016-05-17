////////////////////////////////////////////
// Drifter Gulpfile
// Version 0.2.0
////////////////////////////////////////////

'use strict';

/**
 * Load dependencies
 */
var gulp          = require('gulp'),
    $             = require('gulp-load-plugins')();

/**
 * Configuration
 */
var config = {
  src: {
    sass:       'bulma/**/*.sass',
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
gulp.task('watch', ['sass'], function() {
  gulp.watch(config.src.sass, ['sass']);
});

/**
 * Compile Sass into CSS
 * Add vendor prefixes with Autoprefixer
 */
gulp.task('sass', function() {
  return gulp.src(config.src.sass)
    .pipe($.sass({
      outputStyle: 'compressed'
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer(config.autoprefixer))
    .pipe(gulp.dest(config.dest.css));
});

gulp.task('default', ['watch']);
