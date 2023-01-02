import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  app.enableVersioning({
    type: VersioningType.URI,
  });

  await app.listen(
    config.get('SERVER_PORT') ? parseInt(config.get('SERVER_PORT')) : 3000,
  );
}
bootstrap();
