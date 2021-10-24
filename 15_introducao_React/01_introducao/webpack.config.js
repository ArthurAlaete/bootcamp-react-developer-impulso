const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    // devtool: "source-map",
    // sourcemap: true, // ajuda a debuggar
    entry: './src/index.js', // Ponto de Início
    output: {  // Quais são os bundlers que serão emitidos. Nesse caso, a pasta dist
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundler.js' // Arquivo Final
    },
    module: {
        rules: [
            {
               test: /\.(js|jsx|css)$/,  // O que vai interpretar
               exclude: /node_modules/, // Excluir node_modules
               use: {
                   loader: 'babel-loader' // Fazer a transpilação
               }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        })
    ]
}