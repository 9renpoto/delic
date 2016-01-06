'use strict'

const gulp = require('gulp')

gulp.task('build', function () {
  const jade = require('gulp-jade')
  const layouts = require('../config.js').layouts
  const contents = require('../config.js').contents

  return gulp.src(contents)
    .pipe(jade({
      jade: jade
    }))
    .pipe(gulp.dest(layouts))
})
