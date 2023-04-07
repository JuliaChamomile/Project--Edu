// function defaultTask(cb) {
//   // place code for your default task here
//   cb();
// }

// exports.default = defaultTask

const { src, dest } = require('gulp');

const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cssMin = require('gulp-cssmin');
const gulpCssmin = require('gulp-cssmin');
const fileinclude = require('gulp-file-include');
const uglify = require('gulp-uglify-es').default;


function imageMinimaze() {
    return src('app/img/**/*.*')
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.mozjpeg({quality: 75, progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({
            plugins: [
                {removeViewBox: true},
                {cleanupIDs: false}
            ]
        })
    ]))
    .pipe(dest('dist/img'))
}

function buildStyles() {
    return src('./app/styles**/*.scss')
      .pipe(sass())
      .pipe(dest('./app/style'));
  };

  function minCSS(){
    return src('./app/styles/**/*.css')
      .pipe(autoprefixer())
      .pipe(cssMin())
      .pipe(dest('./dist/style'))
  }

  function fileinc(){
    return src('./app/*.html')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(dest('./dist'));
  }

  function minJS(){
    return src('app/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))

}


exports.imgMin = imageMinimaze;
exports.scss = buildStyles;
exports.css = minCSS;
exports.file = fileinc;
exports.js = minJS;
