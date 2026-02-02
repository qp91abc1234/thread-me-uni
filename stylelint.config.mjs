export default {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue',
    'stylelint-config-recess-order'
  ],
  plugins: ['stylelint-order'],
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html'
    }
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'use',
          'forward',
          'mixin',
          'include',
          'extend',
          'if',
          'else',
          'for',
          'each',
          'while',
          'function',
          'return',
          'content'
        ]
      }
    ],
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    'scss/load-partial-extension': 'always',
    'no-empty-source': null,
    'declaration-property-value-no-unknown': null
  }
}
