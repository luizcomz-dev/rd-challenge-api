import { Logger, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Pega a configuração do arquivo .env
  const config = app.get(ConfigService);

  // Habilita o versionamento da API
  app.enableVersioning({
    type: VersioningType.URI,
  });

  // Coloca o servidor pra rodar na porta determinada no arquivo .env
  await app.listen(
    config.get('SERVER_PORT') ? parseInt(config.get('SERVER_PORT')) : 3000,
  );

  // Loga no console que o servidor está rodando
  Logger.log(
    `Server running on port ${config.get('SERVER_PORT')}`,
    'Bootstrap',
  );
}
bootstrap();
