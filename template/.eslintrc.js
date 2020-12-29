module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'new-cap': 'off',
  },
  globals: {
    '$': true,
    'nativeService': true,
    'jsRunApi': true
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.vue', '.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
}
