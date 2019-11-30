const fs = require('fs');
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sassglob = require('gulp-sass-glob');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const browserSync = require('browser-sync').create();

const package = JSON.parse(fs.readFileSync('./package.json'));

gulp.task('sass', () => gulp.src('src/scss/base.scss')
  .pipe(sassglob())
  .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
  .pipe(autoprefixer({ cascade: false }))
  .pipe(rename(`spartan-${package.version}.css`))
  .pipe(gulp.dest('dist'))
  .pipe(gulp.dest('kitchensink'))
);

gulp.task('javascript', () => gulp.src('src/javascript/**/*.js')
  .pipe(concat(`spartan-${package.version}.js`))
  .pipe(terser())
  .pipe(gulp.dest('dist'))
  .pipe(gulp.dest('kitchensink'))
);

gulp.task('serve', () => {
  browserSync.init({
    open: false,
    notify: false,
    minify: false,
    server: {
      baseDir: './',
      directory: true,
    },
    files: [
      'dist/**/*',
      'kitchensink/**/*'
    ],
  });
});

const watchers = (done) => {
  gulp.watch(['src/scss/**/*.scss'], {
    awaitWriteFinish: true,
  }).on('change', gulp.series('sass'));

  gulp.watch(['src/javascript/**/*.js'], {
    awaitWriteFinish: true,
  }).on('change', gulp.series('javascript'));

  done();
}

gulp.task('build', gulp.series('sass', 'javascript'));
gulp.task('dev', gulp.series('sass', 'javascript', gulp.parallel(watchers, 'serve')));
