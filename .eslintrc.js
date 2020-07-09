module.exports = {
  parser: '@typescript-eslint/parser',
  extends: 'airbnb-typescript-prettier',
  parserOptions: {
    ecmaVersion: 5,
    sourceType: 'module',
  },
  env: {
    jest: true,
  },
  rules: {
    'import/prefer-default-export': ['off'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-named-as-default': ['off'],
  },
}
