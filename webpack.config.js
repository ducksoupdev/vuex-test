var path = require("path");

module.exports = {
    entry: "./src/main.ts",
    output: {
        path: path.join(__dirname, "src"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".ts", ".js"],
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: "ts-loader" }
        ]
    }
};