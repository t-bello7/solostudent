module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'airbnb',
    'airbnb-typescript',
    'plugin:react/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'build/', 'node_modules/'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    "no-restricted-syntax": [
        "error",
        "FunctionExpression",
        "FunctionDeclaration"
      ],
    "react/jsx-filename-extension": ["warn", { "extensions": [".ts", ".tsx"] }],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-shadow': 'off',
    'comma-dangle': 'off',
    quotes: 'off',
    "react/function-component-definition": [2, {
      "namedComponents": "arrow-function",
      "unnamedComponents": "arrow-function"
    }],
    "react/react-in-jsx-scope": "off",
    'import/prefer-default-export': 'off',
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
  },

  parserOptions: {
    project: ['./tsconfig.json'], // Specify it only for TypeScript files
  },
};
