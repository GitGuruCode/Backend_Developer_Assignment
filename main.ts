import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger Configuration
  const config = new DocumentBuilder()
    .setTitle('College Management API')
    .setDescription('API documentation for College Management System')
    .setVersion('1.0')
    .addTag('Colleges')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
  console.log('Application is running on http://localhost:3000');
  console.log('Swagger docs available at http://localhost:3000/api-docs');
}
bootstrap();
