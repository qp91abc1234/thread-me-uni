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
    'no-empty-source': null,
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    'declaration-property-value-no-unknown': null,
    'scss/load-partial-extension': 'always'
  }
}
