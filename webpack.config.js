const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

const JqueryPlugin = new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery",
    jQuery: 'jquery',
    'window.$': 'jquery',
    'window.jQuery': 'jquery',
    Waves: 'node-waves'
})

module.exports = {
    entry: [
        "font-awesome/scss/font-awesome.scss",
        "./src/index.js"
    ],
    plugins: [htmlPlugin, JqueryPlugin],
    devtool: "cheap-module-source-map",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/"
    },
    // Setup server
    devServer: {
        inline: true,
        port: 8081,
        historyApiFallback: true,
    },
    module: {
        // JS, JSX and SASS loaders
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: "url-loader?limit=10000",
            },
            {
                test: /\.(gif|png|jpe?g|svg|eot|woff2|woff|ttf)$/i,
                use: [
                    "file-loader",
                    {
                        loader: "image-webpack-loader",
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newer
                        },
                    },
                ],
            },
            {
                test: /font-awesome\.config\.js/,
                use: [
                    { loader: "style-loader" },
                    { loader: "font-awesome-loader" }
                ]
            }
        ]
    }
};