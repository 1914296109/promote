const path = require("path");

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname,"./build"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test:/\.css$/, //,正则表达式
                // loader: "css-loader"
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    }
}