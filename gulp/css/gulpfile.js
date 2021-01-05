const { series, parallel } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifyCss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformacaoCSS(){
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError)) // Vai pegar o Sass e converter para css
        .pipe(uglifyCss({ "uglyComments": true }))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
}

function copiarHTML(){
    return gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
}
exports.default = parallel(transformacaoCSS, copiarHTML)