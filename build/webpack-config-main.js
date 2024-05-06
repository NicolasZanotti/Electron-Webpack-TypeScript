import path from "path";
import { fileURLToPath } from "url";

export const dirname = path.dirname(fileURLToPath(import.meta.url));

const configuration = {
  mode: "production",
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
              configFile: path.resolve(dirname, "../src/main/tsconfig.json"),
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

export default configuration;
