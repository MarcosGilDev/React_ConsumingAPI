module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
	},
	extends: 'eslint:recommended',
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 8,
		sourceType: 'module',
	},
	rules: {
		indent: ['error', 'tab', 'SwitchCase'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'comma-dangle': ['error', 'always-multiline'],
		'prefer-const': ['error', { destructuring: 'all' }],
		'arrow-parens': ['error', 'always'],
	},
	globals: {
		__dirname: true,
	},
};
