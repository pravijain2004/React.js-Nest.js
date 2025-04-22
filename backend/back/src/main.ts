import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const PORT = process.env.PORT || configService.get<number>('PORT') || 3000;

  app.enableCors({
    origin:[
      'http://localhost:3001',
      'https://react-js-nest-js-frontend.onrender.com'
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(PORT, '0.0.0.0');
  console.log(`✅ Backend is running on port http://localhost:${PORT}`);
}
bootstrap();
