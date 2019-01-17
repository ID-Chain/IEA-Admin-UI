module.exports = {
    devServer: {
        proxy: {
            '/api': {
                // Modify this if you are running the API locally while developing
                // http://23.97.243.176
                target: 'http://23.97.243.176:8000',
                ws: true,
                changeOrigin: true
            }
        },
        watchOptions: {
            poll: true
        }
    }
};
