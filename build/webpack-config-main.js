import path from "path";
import { merge } from "webpack-merge";
import baseConfig from "./webpack-config-base.js";
import { fileURLToPath } from "url";

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const configuration = {
  mode: "production",
  entry: "./src/main/index.ts",
  // @see https://webpack.js.org/configuration/target/
  target: "electron-main",
  module: {
    rules: [
      {
        test: /.ts$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: path.resolve(__dirname, "tsconfig-main.json"),
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    // @see https://webpack.js.org/configuration/resolve/#resolveextensions
    extensions: [".js", ".json", ".ts"],
    // @see https://webpack.js.org/configuration/resolve/#resolvemodules
    modules: ["src", "node_modules"],
  },
  output: {
    filename: "main.cjs",
    path: path.resolve(__dirname, "../dist"),
  },
};

export default merge(baseConfig, configuration);
