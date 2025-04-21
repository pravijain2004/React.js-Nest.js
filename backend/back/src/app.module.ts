import { MiddlewareConsumer,Module,NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';




@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule implements NestModule{
  configure(consumer:MiddlewareConsumer) {
    consumer.apply().forRoutes('*');
  }
}