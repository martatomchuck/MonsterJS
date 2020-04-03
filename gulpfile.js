const gulp = require('gulp');
const sass = require('gulp-sass'); 
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const notifier = require('node-notifier');
sass.compiler = require('node-sass');
function myError(error) {
    console.log(error.formatted);
    notifier.notify({
        title: 'Error',
        message: error.formatted
      });
}
function server(cb) {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    cb();
}
function css() {
    return gulp.src('./scss/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'expanded' // nested, expanded, compact, compressed
    }).on('error', myError))
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
}
function watch(cb) {
    gulp.watch('./scss/**/*.scss', gulp.series(css)); 
    gulp.watch('./*.html').on('change', browserSync.reload);  
    cb();
}
exports.watch = watch;
exports.css = css;
exports.default = gulp.series(server, css, watch);