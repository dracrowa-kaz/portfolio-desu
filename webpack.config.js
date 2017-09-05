var path = require('path');

module.exports = {
    // エントリの定義
    entry : {
        // TODO: SPA(画面)が増えるたびに逐次追加する
        root  : path.resolve(__dirname, 'app/scripts/Root.js')
    },

    // 出力先の定義: /public/scripts/<エントリ名>.bundle.js に出力される
    output : {
        path        : path.resolve(__dirname, 'public/scripts/'),
        filename    : '[name].bundle.js',
    },

    // ローダーの設定: .jsファイルはバンドル前にbabelでトランスパイルする
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [ 'es2015', 'react' ],
                    },
                }],
            },
        ],
    },

    // webpack-dev-serverの設定
    devServer : {
        port            : 8080,
        inline          : true,
        clientLogLevel  : 'info',
        contentBase     : path.join(__dirname, 'scripts/'),
        watchOptions    : {
            poll            : true
        },
    },

    // Source Mapの設定
    devtool : "cheap-eval-source-map",
};
