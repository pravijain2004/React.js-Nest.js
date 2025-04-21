import { Controller, Post, Get, Body, Res, HttpStatus, Put } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { UserDto } from './user.dto';
import { LoginDto } from './login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() userDto: UserDto, @Res() res: Response) {
    try {
      const result = await this.authService.register(userDto);
      return res.status(HttpStatus.CREATED).json(result);
    } catch (error) {
      console.error('Registration error:', error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Registration failed' });
    }
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto, @Res() res: Response) {
    try {
      const { email, password } = loginDto;
      const result = await this.authService.login(email, password);
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      console.error('Login error:', error);
      return res.status(HttpStatus.UNAUTHORIZED).json({ message: 'Invalid credentials' });
    }
  }

  @Get('register')
  getRegisterMessage() {
    return { message: 'Use POST method to register' };
  }

  @Post('forgot-Password')
   async forgotPassword(@Body('email') email:string ,@Res() res: Response){
    try{
      const result = await this.authService.forgotPassword(email);
      return res.status(HttpStatus.OK).json(result);
      }catch(error){
        return res.status(error.status || HttpStatus.INTERNAL_SERVER_ERROR).json({
          message: error.message });
      }
   }

   @Post('reset-password')
   async resetpassword(@Body() body:{ token:string;newPassword:string},@Res() res:Response){
    try{
      const result = await this.authService.resetPassword(body.token,body.newPassword);
      return res.status(HttpStatus.OK).json(result);
      }catch(error){
      return res.status(error.status|| HttpStatus.INTERNAL_SERVER_ERROR).json({ message:error.message});
    }
   }
}
