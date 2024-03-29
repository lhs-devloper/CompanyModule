const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.ts", // λ²λ€λ§? ?? ?μΉ?
    output: {
        path: path.join(__dirname, "/test"), // λ²λ€ κ²°κ³Όλ¬? ?μΉ?
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /[\.js]$/, // .js ? ???¬ babel-loaderλ₯? ?΄?©??¬ transpiling
                exclude: /node_module/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.ts$/, // .ts ? ???¬ ts-loaderλ₯? ?΄?©??¬ transpiling
                exclude: /node_module/,
                use: {
                    loader: "ts-loader",
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    resolve: {
        modules: [path.join(__dirname, "src"), "node_modules"], // λͺ¨λ ?μΉ?
        extensions: [".ts", ".js"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html", // ??λ¦? ?μΉ?
        }),
    ],
    devServer: {
        host: "localhost", // live-server host λ°? port
        port: 5500,
    },
    mode: "development", // λ²λ€λ§? λͺ¨λ development / production
};