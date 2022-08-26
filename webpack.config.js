const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    // コンパイル元のファイルを設定
    entry: './src/js/index.js',
    // JavaScriptのコンパイル先とファイル名を設定
    // この場合はdistフォルダにbundle.jsという名前でコンパイルする
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env'
                            ]
                        }
                    }
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // SASSのコンパイル後のファイル名を設定
            // コンパイル先はoutputに設定したフォルダ
            // この場合はdistフォルダにstyle.cssという名前でコンパイルする
            filename: 'style.css',
        })
    ],
    // devServer: {
    //     static: {
    //         directory: path.resolve(__dirname,'dist'),
    //     }
    // },
};