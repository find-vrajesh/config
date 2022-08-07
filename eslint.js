module.exports = {
	env: {
		browser: true,
		node: true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
	parser: '@typescript-eslint/parser',
	plugins: ['react', 'react-hooks', '@typescript-eslint', 'simple-import-sort'],
	rules: {
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'arrow-body-style': ['error', 'as-needed'],
		'react/self-closing-comp': ['error'],
		'prefer-template': ['error'],
		'simple-import-sort/imports': 'warn',
		'simple-import-sort/exports': 'warn',
	},
};
