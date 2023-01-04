import { Logger, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Pega a configuração do arquivo .env
  const config = app.get(ConfigService);

  // Habilita o versionamento da API
  app.enableVersioning({
    type: VersioningType.URI,
  });

  // Configura o Swagger
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Desafio RD Station - Luiz Heming')
    .setDescription(
      'Ferramenta construída para consulta de dados da API terceira Spacex como parte do processo seletivo da RD Station',
    )
    .setVersion('1.0')
    .addTag('SpaceX-API')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('', app, document);

  app.enableCors();

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
