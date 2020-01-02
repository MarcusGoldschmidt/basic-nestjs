const envConfig = {
    APP_KEY: process.env.SECRET,
    IS_PROD: process.env.ENV === 'production',
    MAIL: {},
};

export default envConfig;
