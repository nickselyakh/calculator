module.exports = {
  '@typescript-eslint/ban-ts-comment': [
    'error',
    {
      'ts-ignore': 'allow-with-description',
      minimumDescriptionLength: 5,
    },
  ],
  '@typescript-eslint/explicit-function-return-type': [
    'error',
    { allowExpressions: true, allowTypedFunctionExpressions: true },
  ],
  '@typescript-eslint/keyword-spacing': ['error'],
  '@typescript-eslint/no-confusing-void-expression': ['error', { ignoreArrowShorthand: true }],
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
  '@typescript-eslint/no-unnecessary-type-constraint': 'error',
  '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  '@typescript-eslint/no-use-before-define': ['error'],
  '@typescript-eslint/prefer-enum-initializers': 'error',
  '@typescript-eslint/prefer-optional-chain': 'error',
  'array-callback-return': 'off', // Controlled by TypeScript
  complexity: ['error', { max: 20 }],
  'consistent-return': 'off', // Controlled by TypeScript
  curly: ['error', 'all'],
  'default-case': 'off', // Controlled by TypeScript
  'import/order': [
    'error',
    {
      'newlines-between': 'always',
    },
  ],
  'import/prefer-default-export': 'off',
  'keyword-spacing': 'off',
  'max-len': [
    'error',
    {
      code: 120,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreTemplateLiterals: true,
      ignoreTrailingComments: true,
    },
  ],
  'no-nested-ternary': 'off',
  'no-plusplus': 'off',
  // BEGINNING of rules taken from https://github.com/iamturns/create-exposed-app/blob/master/.eslintrc.js
  // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
  'no-prototype-builtins': 'off',
  'no-shadow': ['off'],
  'no-trailing-spaces': [
    'error',
    {
      skipBlankLines: true, // Delt by Prettier.
      ignoreComments: false, // Partially delt by Prettier (Prettier erroneously allows trailing whitespaces in block comments).
    },
  ],
  'no-underscore-dangle': 'off',
  'no-unneeded-ternary': ['error', { defaultAssignment: false }],
  'no-unused-vars': 'off',
  // Disable the base rule as it can report incorrect errors, then enable "extension" rule from @typescript-eslint
  // Source: https://stackoverflow.com/a/64024916
  'no-use-before-define': 'off',
  'prettier/prettier': ['error', { endOfLine: 'auto' }],
  // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
  'react/destructuring-assignment': 'off',
  'react/function-component-definition': 'off',
  'react/jsx-props-no-spreading': 'off',
  'react/prop-types': 'off',
  'react-hooks/exhaustive-deps': 'error',
  'ternary/nesting': ['error', { alternate: true, consequent: false, depth: -1, test: false }],
  'ternary/no-dupe': 'error',
  'lines-between-class-members': 'off',
  '@typescript-eslint/lines-between-class-members': 'off',
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: true,
      optionalDependencies: false,
      peerDependencies: false,
    },
  ],
}
