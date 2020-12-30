const path = require('path');

module.exports = {
    entry: './src/index.js', //точка входа, webpack возьмет этот файл, соберет на основе него bundle.js
    output: {
        filename: 'bundle.js', //помеятт это файл в папку dist
        path: path.resolve(__dirname, './dist'),
    },
    mode: 'production',
    devServer: {
        open: true,
        port: 8080,
        hot: true,
        writeToDisk: false
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    option: {
                        presets: ['@babel/env']
                    },
                },
                exclude: /node_module/,
            }
        ]
    }
};