export default [
  {
    ignores: ['dist/**', 'node_modules/**', 'scripts/**', 'data/**', '*.config.js'],
  },
  {
    files: ['src/**/*.{js,jsx}', 'api/**/*.{js,jsx}', 'server/**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      'no-unused-vars': 'off',
      'no-undef': 'off',
    },
  },
];
