module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	settings: {
		react: {
			version: 'detect'
		}
	},
	env: {
		browser: true,
		amd: true,
		node: true
	},
	plugins: [
		'@typescript-eslint',
		'react',
		'react-hooks',
		'eslint-plugin-import-helpers'
	],
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'plugin:@next/next/recommended'
	],
	rules: {
		'no-magic-numbers': ['error', { ignore: [0, 1, -1] }],
		'@typescript-eslint/explicit-function-return-type': 0,
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'react/react-in-jsx-scope': 'off',
		'jsx-a11y/anchor-is-valid': [
			'error',
			{
				components: ['Link'],
				specialLink: ['hrefLeft', 'hrefRight'],
				aspects: ['invalidHref', 'preferButton']
			}
		],
		'react/prop-types': 0,
		'import-helpers/order-imports': [
			'error',
			{
				groups: [
					'module',
					'/components/',
					'/content/',
					'/hooks/',
					'/layouts/',
					'/lib/',
					'/services/',
					'/style/',
					'/types/',
					'/utils/'
				],
				newlinesBetween: 'always'
			}
		],
		'no-multiple-empty-lines': 1
	}
};
