import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ValidationPipe} from '@nestjs/common';
import * as env from 'dotenv';
import {NestExpressApplication} from '@nestjs/platform-express';
import {join} from 'path';

async function bootstrap() {
    env.config();
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    app.useStaticAssets(join(__dirname, '..', 'public'));
    app.setBaseViewsDir(join(__dirname, '..', 'views'));

    app.setViewEngine('jsx');
    app.engine('jsx', require('express-react-views').createEngine());

    // Validation Dtos
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(3000);
}

bootstrap();
