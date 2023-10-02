import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Itheum Marketplace Offer Fetch Tutorial')
    .setDescription(
      'This is a simple project that aims to use NestJS and Itheum SDK to fetch offers from the DataNFT marketplace',
    )
    .setVersion('0.0.1')
    .addTag('itheum')
    .addTag('damian')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
