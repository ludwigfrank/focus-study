const path = require('path')

module.exports = {
    webpack(config, options) {
        config.resolve.alias = {
            ...config.resolve.alias,
            $components: path.join(__dirname, 'components'),
            $visualization: path.join(__dirname, 'components/Visualization'),
        }

        return config
    },
}
