var path = require('path');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: {
        // brick:  'games/brick/brick.ts',
        flappy: './games/flappy/flappy.ts',
    },
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    resolve: {
        alias: {
            engine: path.resolve(__dirname, 'engine/'),
            games: path.resolve(__dirname, 'games/'),
        },
        extensions: [ '.tsx', '.ts', '.js' ],
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
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ],
    }
}