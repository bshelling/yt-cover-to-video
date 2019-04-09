const path = require('path');
const htmlwebPlugin = require('html-webpack-plugin');
const miniExtractPlugin = require('mini-css-extract-plugin');


module.exports = {

    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'./dist')
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(css|sass|scss)$/,
                use: [{
                    loader: miniExtractPlugin.loader
                },'css-loader',{
                    loader: 'sass-loader',
                    options:{
                        implementation: require('sass')
                    }
                }] 
    
            },{
                test: /\.png$/,
                use: ['file-loader']
            }
        ]
    },
    devServer: {
        port: 9005,
        hot: true,
        contentBase: path.resolve(__dirname,'dist')
    },
    plugins: [
        new htmlwebPlugin({
            filename: './dist/index.html'
        }),
        new miniExtractPlugin()
    ]
};