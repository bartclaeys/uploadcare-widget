module.exports = (ctx) => ({
  plugins: {
    'postcss-custom-media': {
      extensions: {
        '--large': '(min-width: 1210px)',
        '--desktop': '(min-width: 760px)',
        '--desktop-only': '(min-width: 760px) and (max-width: 1209px)',
        '--mobile': '(max-width: 759px)',
      },
    },
    'postcss-nested': {},
    'postcss-css-variables': {
      variables: {
        'font-family':
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Ubuntu", "Cantarell", ' +
          '"Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',
        'color-primary': '#157cfc',
        'color-primary-light': '#3891ff',
        'color-primary-dark': '#0969ee',
        'color-base': '#353535',
        'color-base-light': '#666',
        'color-base-dark': '#212121',
        'color-gray': '#a4a2a1',
        'color-gray-light': '#d4d2d2',
        'color-gray-lightest': '#e3e1e1',
        'color-bright': '#ffd800',
        'color-bright-light': '#fff9d8',
        'text-main-color': 'var(--color-base)',
        'back-main-color': 'var(--color-gray-lightest)',
        'fill-main-color': 'var(--color-gray)',
        'dialog-back-color': '#fff',
        'draganddrop-back-color': 'var(--back-main-color)',
        'draganddrop-color': 'var(--fill-main-color)',
        'disable-color': 'var(--color-gray-light)',
        'error-color': '#e66a6a',
        'focus-color': 'color(var(--color-primary) a(50%))',
        'focus-outline': 'var(--focus-color) 2px solid',
        'base-size': '60px',
        'icon-size': '32px',
      },
    },
    'postcss-calc': {},
    'postcss-color-function': {},
    'postcss-flexbugs-fixes': {},
    'autoprefixer': {},
    'cssnano': ctx.env === 'production' ? {zindex: false} : false,
    'postcss-reporter': {},
  },
})
