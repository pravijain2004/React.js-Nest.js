import { Injectable, ConflictException, UnauthorizedException, NotFoundException } from '@nestjs/common';
import * as fs from 'fs-extra';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import * as path from 'path';
import { UserDto } from './user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/Schema/user.schema';


const SECRET_KEY = '1098765432123455';


@Injectable()
export class AuthService {

  constructor(@InjectModel(User.name) private userModel:Model<UserDocument>){}
  
 

  async register(userDto: UserDto) {
    const { username, email, password } = userDto;
    
    const existingUser = await this.userModel.findOne({ email });

    if (existingUser) {
      throw new ConflictException('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new this.userModel({ 
      username, 
      email, 
      password: hashedPassword });
    
    await newUser.save();


    return { message: 'User registered successfully' };
  }

  async login(email: string, password: string) {
    const user = await this.userModel.findOne({ email });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(password, user.Password);
    if (!isMatch) {
      throw new UnauthorizedException('Invalid ');
    }

    const token = jwt.sign({ username: user.Username }, SECRET_KEY, { expiresIn: '1h' });

    return { message: 'Login Successful', token , username:user.Username};
  }

  async forgotPassword(email:string){
    const user = await this.userModel.findOne({ email });

    if(!user){
      throw new NotFoundException('User not found')
    }

    const resetToken = jwt.sign({ email :user.Email}, SECRET_KEY,{expiresIn:'15m'});
  

  user.resetToken = resetToken;
  await user.save();

  return {message :'Reset token generated' , resetToken};

}

async resetPassword(token:string,newPassword:string){
  try{
    const decoded = jwt.verify(token,SECRET_KEY);
    const decodedToken = decoded as jwt.JwtPayload;
    const user = await this.userModel.findOne({ email: decodedToken.email })
    if (!user || user.resetToken ! == token){
      throw new UnauthorizedException('Invalid or expired token');
    }

    user.Password = await bcrypt.hash(newPassword,10);
    delete user.resetToken;

    await user.save()

    return {message:'Password reset successful'};
  }catch(error){
    throw new UnauthorizedException('Invalid or expired token');
  }
}

}
