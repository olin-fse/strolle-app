const getConfig = (env) => {
    if (env !== 'production') {
        return {
            apiEndpoint: 'http://localhost:3000',
            staticEndpoint: 'http://localhost:3000',
        };
    }
};

module.exports = getConfig;
