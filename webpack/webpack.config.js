const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [{ 
            test: /\.css$/, // Ler arquivos css
            use: [
                MiniCssExtractPlugin.loader,
                // 'style-loader', // Plugin, adiciona CSS a DOM injetando a tag <style>
                'css-loader', //interpreta @import, url()
            ],

        }]
    }
}
