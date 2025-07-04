import antfu from '@antfu/eslint-config'

export default antfu(
  {
    lessOpinionated: true,
    // typescript: true,
    vue: true,
    // ignores: [
    //   '**/*.yaml',
    //   '**/*.yml',
    //   '**/node_modules/**',
    //   '**/dist/**',
    //   '**/**',
    //   '!api/**/*.{js,ts,vue}',
    //   '!stores/**/*.{js,ts,vue}',
    // ],
  },
  {
    // files: ['api/**/*.{js,ts,vue}'],
    ignores: [
      '**/*.yaml',
      '**/*.yml',
      '**/node_modules/**',
      '**/dist/**',
    ],
    rules: {
      'vue/block-order': [
        'error',
        { order: ['template', 'script', 'style'] },
      ],
      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'none',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
    languageOptions: {
      globals: {
        useNuxtApp: 'readonly',
        useRuntimeConfig: 'readonly',
      },
    },
  },
)
