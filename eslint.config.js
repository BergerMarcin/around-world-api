import eslintPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import json from '@eslint/json'
import markdown from '@eslint/markdown'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  {
    ignores: ['dist/**', 'node_modules/**', 'coverage/**'],
  },
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': eslintPlugin,
    },
    rules: {
      ...eslintPlugin.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/naming-convention': [
        'warn',
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'allow',
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
        {
          selector: 'enumMember',
          format: ['UPPER_CASE'],
        },
        {
          selector: 'enum',
          format: ['PascalCase'],
          custom: {
            regex: '(enum|Enum)',
            match: false,
          },
        },
      ],
      'no-var': 'warn',
    },
  },
  {
    files: ['**/*.js'],
    ignores: ['eslint.config.js', 'scripts/**', '**/*.md/*.js'],
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector: 'Program',
          message: 'JavaScript files are not allowed. Use TypeScript instead.',
        },
      ],
    },
  },
  {
    files: ['**/*.json'],
    ignores: ['package-lock.json', 'tsconfig.json'],
    plugins: { json },
    language: 'json/json',
    rules: {
      ...json.configs.recommended.rules,
    },
  },
  {
    files: ['**/*.md'],
    plugins: { markdown },
    processor: markdown.processors.markdown,
    rules: {
      ...markdown.configs.recommended.rules,
    },
  },
  eslintConfigPrettier,
]
