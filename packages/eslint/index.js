module.exports = {
  extends: [
    "next",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "simple-import-sort"],
  overrides: [
    {
      files: ["*.tsx", "*.ts"],
      rules: {
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-explicit-any": "warn",
        "react-hooks/rules-of-hooks": "warn",
        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              // Packages. `react` related packages come first.
              // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
              ["^react", "^next", "^@?\\w"],
              // Internal packages or aliases
              ["^(@/*)(/.*|$)", "^\\."],
              // Absolute imports and Relative imports.
              ["^(utils|types)(/.*|$)", "^\\."],
              // Side effect imports.
              ["^\\u0000"],
              // Parent imports. Put `..` last.
              ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
              // Other relative imports. Put same-folder imports and `.` last.
              ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
              // Style imports.
              ["^.+\\.s?css$"],
            ],
          },
        ],
      },
    },
  ],
};
