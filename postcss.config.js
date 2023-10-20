const tokens = require('./tokens/json/core.json')
const postcss = require('postcss')


const base = {
  plugins: {
    'autoprefixer': {},
    'postcss-nesting': {},
    'postcss-env-function': {
      importFrom: () => {
        const environmentVariables = {}
        Object.entries(tokens).forEach(([key, entry]) => {
          if (key.includes('betterplace-measure')) {
            environmentVariables[`--${key}`] = entry
          }
        })
        return { environmentVariables }
      },
    },
  },
}

module.exports = base
