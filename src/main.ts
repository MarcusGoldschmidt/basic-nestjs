import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ValidationPipe} from '@nestjs/common';
import * as env from 'dotenv';
import {NestExpressApplication} from '@nestjs/platform-express';
import {join} from 'path';
import {AppLoggerService} from './infra/logger/logger.service';

async function bootstrap() {
    env.config();
    const app = await NestFactory.create<NestExpressApplication>(AppModule, {
        logger: new AppLoggerService(),
    });

    app.useStaticAssets(join(__dirname, '..', 'resources', 'public'));
    app.setBaseViewsDir(join(__dirname, '..', 'resources', 'views'));

    app.setViewEngine('js');
    app.engine('js', require('express-react-views').createEngine());

    // Validation Dtos
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(3000);
}

bootstrap();
