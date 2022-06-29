module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:import/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:unicorn/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        'ecmaFeatures': {
            'jsx': true,
        },
        'ecmaVersion': 2018,
        'sourceType': 'module',
        'requireConfigFile': false,
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'import-newlines',
    ],
    settings: {
        react: {
            version: '16.13',
        },
    },
    overrides: [
        {
            files: ['**/*.stories.*'],
            extends: [
                'plugin:storybook/recommended',
            ],
        },
    ],
    rules: {
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/consistent-type-assertions': ['error', {
            assertionStyle: 'as',
            objectLiteralTypeAssertions: 'allow-as-parameter',
        }],
        '@typescript-eslint/member-delimiter-style': [
            'error', {
                multiline: {
                    delimiter: 'comma',
                    requireLast: true,
                },
            },
        ],

        'brace-style': 'off',
        '@typescript-eslint/brace-style': ['error', 'stroustrup'],
        'comma-spacing': 'off',
        '@typescript-eslint/comma-spacing': 'error',
        'comma-dangle': 'off',
        '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
        'no-extra-parens': 'off',
        '@typescript-eslint/no-extra-parens': ['error', 'functions'],
        'func-call-spacing': 'off',
        '@typescript-eslint/func-call-spacing': ['error', 'never'],
        'keyword-spacing': 'off',
        '@typescript-eslint/keyword-spacing': 'error',
        'no-duplicate-imports': 'off',
        '@typescript-eslint/no-duplicate-imports': 'error',
        'no-extra-semi': 'off',
        '@typescript-eslint/no-extra-semi': 'error',
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': 'error',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error', 'nofunc'],
        'quotes': 'off',
        '@typescript-eslint/quotes': ['error', 'single'],
        'space-before-function-paren': 'off',
        '@typescript-eslint/space-before-function-paren': [
            'error',
            {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
        'space-infix-ops': 'off',
        '@typescript-eslint/space-infix-ops': 'error',
        'camelcase': 'off',

        'unicorn/prevent-abbreviations': 'off',
        'unicorn/no-null': 'off',
        'unicorn/prefer-switch': 'off',
        'unicorn/prefer-ternary': 'off',
        'unicorn/no-nested-ternary': 'off',
        'unicorn/no-await-expression-member': 'off',
        'unicorn/filename-case': 'off',
        'unicorn/no-useless-undefined': ['error', {'checkArguments': false}],
        'unicorn/prefer-node-protocol': 'off',
        'unicorn/prefer-module': 'off',
        'no-unsafe-optional-chaining': 'error',
        'curly': ['error', 'all'],

        'sort-imports': ['error', {
            ignoreCase: false,
            ignoreDeclarationSort: true,
            memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        }],
        'import-newlines/enforce': [
            'error',
            {
                items: 10,
                'max-len': 150,
            },
        ],
        'semi': 'off',
        // '@babel/semi': ['error', 'always'],
        '@typescript-eslint/semi': ['error', 'always'],
        'object-curly-spacing': 'off',
        // '@babel/object-curly-spacing': ['error', 'never'],
        '@typescript-eslint/object-curly-spacing': ['error', 'never'],

        'react/prop-types': 'error',
        'react/forbid-foreign-prop-types': 'error',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/static-property-placement': 'error',
        'react/jsx-curly-brace-presence': ['error', {props: 'never', children: 'never'}],
        'react/jsx-first-prop-new-line': ['error', 'multiline'],
        'react/jsx-closing-tag-location': 'error',
        'react/self-closing-comp': 'error',
        'react/jsx-closing-bracket-location': ['error', {
            nonEmpty: 'line-aligned',
            selfClosing: 'line-aligned',
        }],
        'react/jsx-max-props-per-line': ['error', {
            maximum: {
                single: 4,
                multi: 1,
            },
        }],
        'import/named': 'off',
        'import/order': [
            'error',
            {
                groups: [
                    ['builtin', 'external'],
                    ['internal'],
                    ['parent'],
                    ['sibling', 'index'],
                    'object',
                ],
                pathGroups: [
                    {
                        pattern: '*.scss',
                        patternOptions: {
                            matchBase: true,
                        },
                        group: 'object',
                    },
                ],
                warnOnUnassignedImports: true,
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
                'newlines-between': 'always',
            },
        ],
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-unassigned-import': [
            'error',
            {
                allow: [
                    '**/*.scss',
                    '**/*.css',
                ],
            },
        ],
        'import/no-mutable-exports': 'error',
        'import/no-unused-modules': [
            'off', // raises many false-positives; enabled only when cleaning up old code
            {
                unusedExports: true,
            },
        ],
        'import/no-unresolved': [
            'error',
            {
                ignore: ['Console'],
            },
        ],
        'import/namespace': 'off',
        'no-warning-comments': ['warn', {'terms': ['todo', 'fixme', 'bugbug'], 'location': 'start'}],
        'eol-last': ['error', 'always'],
        'function-paren-newline': ['error', 'multiline-arguments'],
        'operator-linebreak': [
            'error',
            'before',
            {
                overrides: {
                    '?': 'ignore',
                    ':': 'ignore',
                },
            },
        ],
        'id-denylist': ['error', 'Updates'],
        'no-unreachable': 'error',
        'no-multiple-empty-lines': 'error',
        'class-methods-use-this': [
            'error',
            {
                exceptMethods: [
                    'render',
                    'getInitialState',
                    'getDefaultProps',
                    'getChildContext',
                    'componentWillMount',
                    'UNSAFE_componentWillMount',
                    'componentDidMount',
                    'componentWillReceiveProps',
                    'UNSAFE_componentWillReceiveProps',
                    'shouldComponentUpdate',
                    'componentWillUpdate',
                    'UNSAFE_componentWillUpdate',
                    'componentDidUpdate',
                    'componentWillUnmount',
                    'componentDidCatch',
                    'getSnapshotBeforeUpdate',
                ],
            },
        ],
        'no-empty': [
            'error',
            {
                'allowEmptyCatch': true,
            },
        ],
        'no-empty-function': 'off',
        'no-return-await': 'error',
        'no-spaced-func': 'error',
        'no-unneeded-ternary': 'error',
        'prefer-arrow-callback': 'error',
        'prefer-promise-reject-errors': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'require-await': 'error',
        'no-bitwise': 'error',
        'indent': [
            'error',
            4,
            {
                ignoredNodes: [
                    'JSXElement',
                    'JSXElement > *',
                    'JSXAttribute',
                    'JSXIdentifier',
                    'JSXNamespacedName',
                    'JSXMemberExpression',
                    'JSXSpreadAttribute',
                    'JSXExpressionContainer',
                    'JSXOpeningElement',
                    'JSXClosingElement',
                    'JSXFragment',
                    'JSXOpeningFragment',
                    'JSXClosingFragment',
                    'JSXText',
                    'JSXEmptyExpression',
                    'JSXSpreadChild',
                ],
            },
        ],
        'no-console': 'error',
        'arrow-spacing': 'error',
        'object-curly-newline': [
            'error',
            {
                ObjectExpression: {
                    multiline: true,
                    consistent: true,
                },
                ObjectPattern: {
                    multiline: true,
                    consistent: true,
                },
                ImportDeclaration: {
                    multiline: true,
                    minProperties: 10,
                    consistent: true,
                },
                ExportDeclaration: {
                    multiline: true,
                    consistent: true,
                },
            },
        ],
        'object-property-newline': [
            'error',
            {
                allowAllPropertiesOnSameLine: true,
            },
        ],
        'no-trailing-spaces': 'error',
        'no-multi-spaces': 'error',
        'object-shorthand': 'error',
        'key-spacing': 'error',
        'space-before-blocks': 'error',
        'array-bracket-spacing': ['error', 'never'],
        'space-in-parens': ['error', 'never'],
        'linebreak-style': ['error', 'unix'],
        'eqeqeq': 'error',
    },
};
