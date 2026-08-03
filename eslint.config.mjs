import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import nextPrettier from 'eslint-config-prettier'

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  nextPrettier,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts'
  ]),
  {
    rules: {
      'no-console': 'error',
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      quotes: ['error', 'single', { allowTemplateLiterals: true }]
    }
  }
])

export default eslintConfig
