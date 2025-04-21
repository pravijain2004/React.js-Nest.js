import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const PORT = configService.get<number>('PORT')|| 3000;


  app.enableCors({
    origin: 'http://localhost:3001',
    methods:'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials:true,
  })

  
  await app.listen(PORT);
  console.log(`Backend is running on http://localhost:${PORT}`);
}
bootstrap();
