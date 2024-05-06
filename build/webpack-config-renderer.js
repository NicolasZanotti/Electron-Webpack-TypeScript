import path from "path";
import { merge } from "webpack-merge";
import baseConfig from "./webpack-config-base.js";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";

export const dirname = path.dirname(fileURLToPath(import.meta.url));

const configuration = {
  entry: "./src/renderer/index.ts",
  target: "electron-renderer",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: path.resolve(
                dirname,
                "../src/renderer/tsconfig.json"
              ),
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    modules: ["src", "node_modules"],
  },
  output: {
    filename: "renderer.js",
    path: path.resolve(dirname, "../dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(dirname, "../src/renderer/index.html"),
    }),
  ],
};

export default merge(baseConfig, configuration);
