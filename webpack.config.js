const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.ts", // 번들�? ?��?�� ?���?
    output: {
        path: path.join(__dirname, "/test"), // 번들 결과�? ?���?
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /[\.js]$/, // .js ?�� ?��?��?�� babel-loader�? ?��?��?��?�� transpiling
                exclude: /node_module/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.ts$/, // .ts ?�� ?��?��?�� ts-loader�? ?��?��?��?�� transpiling
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
        modules: [path.join(__dirname, "src"), "node_modules"], // 모듈 ?���?
        extensions: [".ts", ".js"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html", // ?��?���? ?���?
        }),
    ],
    devServer: {
        host: "localhost", // live-server host �? port
        port: 5500,
    },
    mode: "development", // 번들�? 모드 development / production
};