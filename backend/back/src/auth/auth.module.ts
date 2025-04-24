import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { UserSchema, User } from 'src/Schema/user.schema';


@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name:User.name,
        schema:UserSchema
      }
    ]),
    JwtModule.register({
      secret:'',
      signOptions:{ expiresIn: '1h'},
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports:[AuthService],
})
export class AuthModule {}
