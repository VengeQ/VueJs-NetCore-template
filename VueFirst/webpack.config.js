const webpack = require('webpack');
var path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const bundleOutputDir = './wwwroot/js';


module.exports = {
    context:__dirname,
    mode: 'development',
    entry: './Views/Home/site.ts',
    output: {
        path: path.resolve(__dirname, 'wwwroot/js'),
        publicPath: '/wwwroot/js/',
        filename: 'site.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                },
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                //options: {
                //    loaders: {
                //        'scss': [
                //            'vue-style-loader',
                //            'css-loader',
                //            'sass-loader'
                //        ],
                //        'sass': [
                //            'vue-style-loader',
                //            'css-loader',
                //            'sass-loader?indentedSyntax'
                //        ]
                //    }
                //}
                exclude: file => (
                    /node_modules/.test(file) &&
                    !/\.vue\.js/.test(file)
                )
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.vue', '.json']
    },
    //devServer: {
    //    historyApiFallback: true,
    //    noInfo: true,
    //    overlay: true
    //},
    //performance: {
    //    hints: false
    //}, output: {
    //    path: path.join(__dirname, bundleOutputDir),
    //    filename: '[name].js',
    //    publicPath: 'dist/'
    //}
    plugins: [
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: true,
        }),
    ]
}

//if (process.env.NODE_ENV === 'production') {

//    module.exports.plugins = (module.exports.plugins || []).concat([
//        new webpack.DefinePlugin({
//            'process.env': {
//                NODE_ENV: '"production"'
//            }
//        }),
//        new webpack.optimize.UglifyJsPlugin({
//            sourceMap: true,
//            compress: {
//                warnings: false
//            }
//        }),
//        new webpack.LoaderOptionsPlugin({
//            minimize: true
//        })
//    ])
//}