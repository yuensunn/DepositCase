import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

function initSwagger(app: INestApplication): void {
  const options = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('All endpoints available')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options, {});

  SwaggerModule.setup('docs', app, document);
}
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  initSwagger(app);
  await app.listen(80);
}
bootstrap();
