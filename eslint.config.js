import typescriptPlugin from '@typescript-eslint/eslint-plugin';

import tsParser from '@typescript-eslint/parser';

import eslintConfigPrettier from 'eslint-config-prettier';

import prettier from 'eslint-plugin-prettier';

import pluginVue from 'eslint-plugin-vue';

export default [
	// Fichiers ignorés

	{
		ignores: ['**/dist/**', '**/node_modules/**', '**/.turbo/**', '**/coverage/**', '**/.vscode/**'],
	},

	// Configuration de base

	{
		linterOptions: {
			reportUnusedDisableDirectives: true,
		},

		settings: {
			vue: {
				version: '3.5.13',
			},
		},
	},

	// Configuration TypeScript

	{
		files: ['**/*.ts', '**/*.tsx'],

		plugins: {
			'@typescript-eslint': typescriptPlugin,
		},

		languageOptions: {
			parser: tsParser,

			parserOptions: {
				ecmaVersion: 'latest',

				sourceType: 'module',
			},
		},

		rules: {
			...typescriptPlugin.configs['recommended'].rules,
		},
	},

	// Configuration Vue

	{
		files: ['**/*.vue'],

		languageOptions: {
			parser: await import('vue-eslint-parser'),

			parserOptions: {
				parser: {
					ts: tsParser,

					tsx: tsParser,

					js: tsParser,
				},

				extraFileExtensions: ['.vue'],

				ecmaVersion: 'latest',

				sourceType: 'module',
			},
		},

		plugins: {
			vue: pluginVue,
		},

		rules: {
			...pluginVue.configs['flat/recommended'].rules,
		},
	},

	// Configuration Prettier

	eslintConfigPrettier,

	{
		plugins: {
			prettier,
		},

		rules: {
			'prettier/prettier': [
				'error',

				{
					useTabs: true,

					tabWidth: 4,
					endOfLine: 'crlf',
				},
			],
		},
	},
];
