import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import cleaner from "rollup-plugin-cleaner";
import resolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import packageJson from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    cleaner({
      targets: ["./lib"],
    }),
    peerDepsExternal(),
    resolve(),
    typescript(),
    postcss({
      plugins: [],
    }),
  ],
};
