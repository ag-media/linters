const base = require('./base.js');

module.exports = {
    ...base,
    extends: [
        ...base.extends,
        'eslint-config-next',
    ],
    rules: {
        ...base.rules,
        'react/react-in-jsx-scope': 'off',
        '@next/next/next-script-for-ga': 'off',
        '@next/next/no-img-element': 'off',
    },
};
