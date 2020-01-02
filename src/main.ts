import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ValidationPipe} from '@nestjs/common';
import * as env from 'dotenv';
import {NestExpressApplication} from '@nestjs/platform-express';
import {join} from 'path';
import {AppLoggerService} from './infra/logger/logger.service';
import * as rateLimit from 'express-rate-limit';

async function bootstrap() {
    env.config();
    const app = await NestFactory.create<NestExpressApplication>(AppModule, {
        logger: new AppLoggerService(),
    });

    app.useStaticAssets(join(__dirname, '..', 'resources', 'public'));
    app.setBaseViewsDir(join(__dirname, '..', 'resources', 'views'));

    app.setViewEngine('js');
    app.engine('js', require('express-react-views').createEngine());

    app.use(
        rateLimit({
            windowMs: 15 * 60 * 1000, // 15 minutes
            max: 100, // limit each IP to 100 requests per windowMs
        }),
    );

    // Validation Dtos
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(3000);
}

bootstrap();
