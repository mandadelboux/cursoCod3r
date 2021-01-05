const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS(cb) {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false, 
            presets: ["env"] // Pegar tudo que há de mais moderno do JS
        }))
        .pipe(uglify()) // Converter código para mimificado
        .on('error', err => console.log(err))
        .pipe(concat('codigo.min.js')) 
        .pipe(gulp.dest('build'))

    // return cb()
}

function fim(cb) {
    console.log('Fim!!!')
    return cb()
}

exports.default = series(transformacaoJS, fim)