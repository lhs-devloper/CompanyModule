const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.ts", // ë²ˆë“¤ë§? ?‹œ?‘ ?œ„ì¹?
    output: {
        path: path.join(__dirname, "/test"), // ë²ˆë“¤ ê²°ê³¼ë¬? ?œ„ì¹?
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /[\.js]$/, // .js ?— ?•œ?•˜?—¬ babel-loaderë¥? ?´?š©?•˜?—¬ transpiling
                exclude: /node_module/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.ts$/, // .ts ?— ?•œ?•˜?—¬ ts-loaderë¥? ?´?š©?•˜?—¬ transpiling
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
        modules: [path.join(__dirname, "src"), "node_modules"], // ëª¨ë“ˆ ?œ„ì¹?
        extensions: [".ts", ".js"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html", // ?…œ?”Œë¦? ?œ„ì¹?
        }),
    ],
    devServer: {
        host: "localhost", // live-server host ë°? port
        port: 5500,
    },
    mode: "development", // ë²ˆë“¤ë§? ëª¨ë“œ development / production
};