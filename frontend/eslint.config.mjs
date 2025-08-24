// eslint.config.mjs
import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';

export default [

  { ignores: ['node_modules', '.next', 'dist', 'build', 'coverage', 'next-env.d.ts'] },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    plugins: { '@next/next': nextPlugin },
    rules: { ...nextPlugin.configs['core-web-vitals'].rules },
  },

  prettier,

  {
    plugins: { import: importPlugin, 'unused-imports': unusedImports },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      'unused-imports/no-unused-imports': 'warn',
      'import/order': [
        'warn',
        {
          alphabetize: { order: 'asc', caseInsensitive: true },
          'newlines-between': 'always',
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
        },
      ],
    },
  },
];
