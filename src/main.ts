import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ValidationPipe} from '@nestjs/common';
import * as env from 'dotenv';
import {NestExpressApplication} from '@nestjs/platform-express';
import {join} from 'path';
import {AppLoggerService} from './infra/logger/logger.service';
import * as rateLimit from 'express-rate-limit';
import * as helmet from 'helmet';
import * as passport from 'passport';
import flash = require('connect-flash');
import 'reflect-metadata';
import session = require('express-session');
import config from './config';

async function bootstrap() {

    const app = await NestFactory.create<NestExpressApplication>(AppModule, {
        logger: new AppLoggerService(),
    });

    app.use(session({
        secret: config.SESSION.KEY,
        resave: false,
        saveUninitialized: true,
        cookie: {secure: true},
    }));

    // Middleware
    app.use(helmet());
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
    app.useGlobalPipes(new ValidationPipe());

    app.useStaticAssets(join(__dirname, '..', 'resources', 'public'));
    app.setBaseViewsDir(join(__dirname, '..', 'resources', 'views'));

    app.setViewEngine('js');
    app.engine('js', require('express-react-views').createEngine());

    await app.listen(3000);
}

bootstrap();
