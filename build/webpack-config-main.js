import path from "path";
import { merge } from "webpack-merge";
import baseConfig from "./webpack-config-base.js";
import { fileURLToPath } from "url";

export const dirname = path.dirname(fileURLToPath(import.meta.url));

const configuration = {
  entry: "./src/main/index.ts",
  target: "electron-main",
  module: {
    rules: [
      {
        test: /.ts$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: path.resolve(dirname, "tsconfig-main.json"),
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".json", ".ts"],
    modules: ["src", "node_modules"],
  },
  output: {
    filename: "main.cjs",
    path: path.resolve(dirname, "../dist"),
  },
};

export default merge(baseConfig, configuration);
