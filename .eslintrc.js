module.exports = {
  'env': {
    'node': true,
    'es6': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'sourceType': 'module'
  },
  'rules': {
    'no-console': 0,
    'indent': [
      'error',
      2,
      {
        'SwitchCase': 1,
        'ArrayExpression': 'first',
        'ObjectExpression': 'first',
        'CallExpression': {'arguments': 'first'}
      }
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ]
  }
};