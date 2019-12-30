import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as env from 'dotenv';

async function bootstrap() {
  env.config();
  const app = await NestFactory.create(AppModule);
  // Validação de Dto usando class-validator
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
