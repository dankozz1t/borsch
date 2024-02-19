module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: ["@nuxtjs/eslint-config-typescript", "plugin:prettier/recommended"],
  plugins: [],
  rules: {
    "no-console": "off",
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        printWidth: 100,
        tabWidth: 2,
        useTabs: false,
        trailingComma: 'all',
        bracketSpacing: true,
        singleQuote: true,
      },
    ],
  },
};
