module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-standard-scss',
    'stylelint-config-prettier-scss',
    'stylelint-config-sass-guidelines',
    'stylelint-config-idiomatic-order',
    'stylelint-prettier/recommended',
  ],
  rules: {
    'order/properties-alphabetical-order': null,
    'selector-class-pattern': '^[-a-z0-9]+$',
    'string-quotes': 'single',
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind'] }],
    'max-nesting-depth': 2,
    'selector-max-id': 2,
    'selector-no-qualifying-type': null,
  },
};
