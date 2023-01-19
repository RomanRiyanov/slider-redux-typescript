module.exports = {
  // files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript',
    'plugin:react/jsx-runtime',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'no-underscore-dangle': ['error', { allow: ['_'] }],
    'no-console': 'off',
    'linebreak-style': 0,
    'no-param-reassign': 0,
    'import/no-named-as-default': 0,
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],
  },
};
