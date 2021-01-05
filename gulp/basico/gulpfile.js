const gulp = require('gulp')
// const series = gulp.series // OU - 
const { series, parallel } = require('gulp')

const antes1 = cb => {
    console.log('Tarefa Antes 1!')
    return cb()
}
const antes2 = cb => {
    console.log('Tarefa Antes 2!')
    return cb()
}
// **** Função Principal ****
function copiar(cb){
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])// Arquivos que serão usados como entrada
    gulp.src('pastaA/**/*.txt')// Qualquer arquivo que esteja dentro da pasta A com extensão TXT será copiado
        .pipe(gulp.dest('pastaB')) // Aplicar ou fazer transformações nos arquivos de entrada
    return cb()
}

const fim = cb => {
    console.log('Tarefa fim!')
    return cb()
}
// Execução do Gulp
module.exports.default = series(
    parallel(antes1,antes2),
    copiar,
    fim,
    )
