/**
 * Copyright IBM Corp. 2018, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";

module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ["@babel/preset-env", "@babel/preset-react"],
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:jsdoc/recommended",
  ],
  plugins: [
    "react",
    "jsdoc",
    "jsx-a11y",
    "react-hooks",
    "tree-shaking",
    "cypress",
  ],
  rules: {
    // Handle cases where we are destructuring but may not be using the initial
    // variables
    "no-unused-vars": [
      "error",
      {
        args: "after-used",
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "sort-imports": [
      "error",
      {
        ignoreCase: true,
        ignoreMemberSort: true,
      },
    ],
    "react/jsx-uses-vars": 1,
    "react/jsx-uses-react": 1,

    // Require ES6 class declarations over React.createClass
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
    "react/prefer-es6-class": ["error", "always"],

    // Require stateless functions when not using lifecycle methods, setState or ref
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    "react/prefer-stateless-function": [
      "error",
      { ignorePureComponents: true },
    ],

    "react/no-find-dom-node": 1,
    "react/no-typos": 2,
    "react/no-unused-prop-types": 2,
    "react/prop-types": 2,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "jsdoc/require-jsdoc": [
      2,
      {
        require: {
          ArrowFunctionExpression: true,
          ClassDeclaration: true,
          FunctionDeclaration: true,
          MethodDefinition: true,
        },
      },
    ],
    "jsdoc/require-param-description": 2,
    "jsdoc/require-param-name": 2,
    "jsdoc/require-param": 2,
    "jsdoc/require-param-type": 2,
    "jsdoc/valid-types": 2,
    "jsdoc/check-param-names": 2,
    "jsdoc/check-tag-names": 2,
    "jsdoc/check-types": 2,
    "jsx-a11y/no-static-element-interactions": 1,
    "jsx-a11y/no-noninteractive-element-interactions": 1,
    "jsx-a11y/click-events-have-key-events": 1,
    "jsx-a11y/anchor-is-valid": 1,
    "jsx-a11y/interactive-supports-focus": 1,
    "jsx-a11y/label-has-for": [
      1,
      {
        components: ["Label"],
        required: {
          some: ["nesting", "id"],
        },
        allowChildren: true,
      },
    ],
  },
  overrides: [
    {
      files: [
        "packages/react/src/*.js",
        "packages/services/src/*.js",
        "packages/utilities/src/*.js",
      ],
      rules: {
        "tree-shaking/no-side-effects-in-initialization": 2,
      },
    },
  ],
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: true,
    jasmine: true,
    "cypress/globals": true,
  },
  globals: {
    __DEV__: true,
  },
  settings: {
    jsdoc: {
      tagNamePreference: {
        augments: "extends",
      },
    },
    react: {
      version: "detect",
    },
  },
};
