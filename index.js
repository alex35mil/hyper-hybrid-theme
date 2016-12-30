exports.decorateConfig = (config) => Object.assign({}, config, {
  cursorColor: config.cursorColor || 'rgba(255, 255, 255, .4)',
  cursorShape: config.cursorShape || 'BLOCK',

  foregroundColor: '#d5c4a1',
  backgroundColor: '#1d1f21',
  borderColor: '#1d1f21',

  colors: {
    black: '#383d43',
    red: '#c66363',
    green: '#c0c86d',
    yellow: '#eac171',
    blue: '#80a2be',
    magenta: '#b193ba',
    cyan: '#90c9c1',
    white: '#c2c5c3',
    lightBlack: '#636363',
    lightRed: '#a04041',
    lightGreen: '#8b9440',
    lightYellow: '#ec9c62',
    lightBlue: '#5d7f9a',
    lightMagenta: '#82658c',
    lightCyan: '#5e8d87',
    lightWhite: '#6d757d'
  },

  css: `
    .splitpane_divider {
      background-color: #2a2d30 !important;
    }
    ${config.css || ''}
  `,

  termCSS: `
    x-screen {
      -webkit-font-smoothing: subpixel-antialiased !important;
    }
    ${config.termCSS || ''}
  `,
});
