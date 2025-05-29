module.exports = {
  theme: {
    extend: {
      animation: {
        'slow-spin': 'spin 20s linear infinite',
        'slow-spin-reverse': 'spin-reverse 25s linear infinite',
      },
      keyframes: {
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
      },
    },
  },
}
