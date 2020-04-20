module.exports = {
  extends: ['./non-rules-config.js', 'prettier'],
  rules: {
    'object-shorthand': ['error', 'properties'],
    'prefer-arrow-callback': [
      'error',
      {allowNamedFunctions: true, allowUnboundThis: true},
    ],
    'prefer-destructuring': 'off',
    'sort-imports': 'off',

    camelcase: 'off',
    'babel/camelcase': ['error', {properties: 'always'}],
    'new-cap': 'off',
    'babel/new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: true,
      },
    ],
    'no-invalid-this': 'off',
    'babel/no-invalid-this': 'error',
  },
}
