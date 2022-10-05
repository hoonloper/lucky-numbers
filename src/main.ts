import { INestApplication, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app: INestApplication = await NestFactory.create<NestApplication>(
    AppModule,
  );
  const configService: ConfigService = app.get(ConfigService);
  const SERVER_PORT: number = configService.get<number>('SERVER_PORT');

  app.enableCors();

  await app.listen(SERVER_PORT);

  Logger.log(`Start Run: ${SERVER_PORT}`);
}
bootstrap();
