module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-prettier-scss',
    'stylelint-config-sass-guidelines',
    'stylelint-config-idiomatic-order',
    'stylelint-prettier/recommended',
  ],
  rules: {
    'order/properties-alphabetical-order': null,
    'selector-class-pattern': null,
    'string-quotes': 'single',
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind'] }],
    'selector-max-id': 2,
    'selector-no-qualifying-type': null,
    'selector-max-compound-selectors': 4,
    'max-nesting-depth': 3,
  },
};
