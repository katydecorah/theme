import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "commonjs" },
  },
  { languageOptions: { globals: globals.browser } },
  {
    ignores: ["assets/lunr.min.js", "assets/lunr-feed.js", "_site/"],
  },
  pluginJs.configs.recommended,
];
