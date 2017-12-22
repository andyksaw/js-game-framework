var path = require('path');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: {
        brick:  'games/brick/brick.js',
        flappy: 'games/flappy/flappy.js',
    },
    output: {
        path: path.resolve(__dirname, 'builds'),
        filename: '[name].js',
    },
    resolve: {
        alias: {
            engine: path.resolve(__dirname, 'engine/'),
            games: path.resolve(__dirname, 'games/'),
        },
    },
    plugins: [
        new BrowserSyncPlugin({
          host: 'localhost',
          port: 3000,
          server: { baseDir: ['./'] }
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}