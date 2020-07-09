module.exports = {
  "parser": "@typescript-eslint/parser",
  "extends": "airbnb-typescript-prettier",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
    },
  },
  "env": {
    "jest": true,
  },
  "rules": {
    'react/jsx-props-no-spreading': ['off'],
    "react/prop-types": 'off',
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "import/no-named-as-default": ["off"],
  },
}
