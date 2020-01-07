import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ValidationPipe} from '@nestjs/common';
import {NestExpressApplication} from '@nestjs/platform-express';
import {join} from 'path';
import {AppLoggerService} from './infra/logger/logger.service';
import * as rateLimit from 'express-rate-limit';
import * as passport from 'passport';
import flash = require('connect-flash');
import 'reflect-metadata';
import session = require('express-session');
import config from './config';
import helmet = require('helmet');
import cors = require('cors');

async function bootstrap() {

    const app = await NestFactory.create<NestExpressApplication>(AppModule, {
        logger: new AppLoggerService(),
    });

    // Middleware
    app.use(helmet());
    app.use(cors());

    app.use(session({
        secret: config.SESSION.KEY,
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: true,
        },
    }));

    app.use(
        rateLimit({
            windowMs: 15 * 60 * 1000, // 15 minutes
            max: 100, // limit each IP to 100 requests per windowMs
        }),
    );

    app.use(passport.initialize());
    app.use(passport.session());
    app.use(flash());

    // Validation Dtos
    // app.useGlobalPipes(new ValidationPipe());

    app.useStaticAssets(join(__dirname, '..', 'resources', 'public'));
    app.setBaseViewsDir(join(__dirname, '..', 'resources', 'views'));

    app.setViewEngine('js');
    app.engine('js', require('express-react-views').createEngine());

    await app.listen(3000);
}

bootstrap();
