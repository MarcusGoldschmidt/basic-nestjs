import * as env from 'dotenv';
env.config();

const envConfig = {
    APP_KEY: process.env.SECRET,
    APP_SALT: +process.env.SECRET_SALT,
    IS_PROD: process.env.ENV === 'production',
    MAIL: {
        EMAIL_DOMAIN: process.env.MAIL_EMAIL_DOMAIN,
        DOMAIN: process.env.MAIL_DOMAIN,
        PASSWORD: process.env.MAIL_PASSWORD,
    },
    SESSION: {
        KEY: process.env.SESSION_KEY,
    },
};

export default envConfig;
