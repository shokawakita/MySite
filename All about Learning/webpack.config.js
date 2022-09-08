const path = require('path');
const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
    mode: 'development',
    // コンパイル元のファイルを設定
    entry: './src/js/index.js',
    // JavaScriptのコンパイル先とファイル名を設定
    // この場合はdistフォルダにbundle.jsという名前でコンパイルする
    output: {
        path: outputPath,
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
                                "@babel/react"
                            ]
                        }
                    }
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    devServer: {
        static: {
            directory: outputPath,
        }
    },
};