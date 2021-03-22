var configure = require('react-figma-webpack-config');

module.exports = configure({
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    }
});
