import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api/api.module';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})

@Module({
  imports: [ApiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}