module.exports = {
	'env': {
		'node': true,
	},
	'parser': 'vue-eslint-parser',
	'extends': [
		'eslint:recommended',
		'plugin:vue/base',
		'plugin:vue/vue3-recommended',
		'plugin:@typescript-eslint/recommended'
	],
	'parserOptions': {
		'ecmaVersion': 12,
		'parser': '@typescript-eslint/parser',
		'sourceType': 'module',
	},
	'plugins': [
		'vue',
		'@typescript-eslint',
	],
	'rules': {
		'linebreak-style': 0,
		'quotes': [
			'error',
			'single'
		],
		'semi': 'off',
		'indent': 'off',
		'vue/multi-word-component-names': 0,
		'@typescript-eslint/semi': 'off',
	}
};
