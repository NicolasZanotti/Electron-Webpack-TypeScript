import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";

export const dirname = path.dirname(fileURLToPath(import.meta.url));

const configuration = {
  mode: "production",
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
    filename: "renderer.mjs",
    path: path.resolve(dirname, "../dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      scriptLoading: "module",
      template: path.resolve(dirname, "../src/renderer/index.html"),
    }),
  ],
};

export default configuration;
