import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import unusedImports from 'eslint-plugin-unused-imports'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'unused-imports': unusedImports,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'error',
        { allowConstantExport: true },
      ],
      'no-unused-vars': [
        'warn',
        {vars: 'all', args: 'after-used', ignoreRestSiblings: false }
      ],
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': ['error',
        {vars: "all", varsIgnorePattern: '^_'}
      ],
      "indent": ["error", 2],
      "space-before-function-paren": ["error", "never"],
      "quotes": ["warn", "single"],
      "no-useless-escape": "error",
      'no-console': [
        'error',
        { allow: ['warn', 'error']}
      ],

    },
  },
)
