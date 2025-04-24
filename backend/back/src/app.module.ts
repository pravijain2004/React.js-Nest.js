import { MiddlewareConsumer,Module,NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { ConfigModule,ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[
    ConfigModule.forRoot({
      isGlobal:true,
    }),
    MongooseModule.forRootAsync({
      imports:[ConfigModule],
      useFactory:async (configService:ConfigService)=> ({
        uri: configService.get<string>('MONGO_URI')
      }),
      inject:[ConfigService],
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule implements NestModule{
  configure(consumer:MiddlewareConsumer) {
    consumer.apply().forRoutes('*');
  }
}