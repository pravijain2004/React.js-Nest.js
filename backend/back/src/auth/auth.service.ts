import { Injectable, ConflictException, UnauthorizedException, NotFoundException } from '@nestjs/common';
import * as fs from 'fs-extra';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import * as path from 'path';
import { UserDto } from './user.dto';

const FILE_PATH = 'users.json';
const SECRET_KEY = '1098765432123455';
const USERS_FILE = path.join(__dirname, '../../users.json');

@Injectable()
export class AuthService {
  private async getUsers(){
    try{
      return await fs.readJson(USERS_FILE);

    }catch (error){
      return [];
    }
  }

  private async saveUsers(users){
    await fs.writeJson(USERS_FILE,users,{ space : 2});
  }
  constructor() {}

  async register(userDto: UserDto) {
    const { username, email, password } = userDto;
    const users = await this.getUsers();
    const existingUser = users.find((user: any) => user.email === email);

    if (existingUser) {
      throw new ConflictException('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { username, email, password: hashedPassword };
    users.push(newUser);
    await fs.writeJson(USERS_FILE, users);
    return { message: 'User registered successfully' };
  }

  async login(email: string, password: string) {
    const users = await this.getUsers();
    const user = users.find((user: any) => user.email === email);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('Invalid ');
    }

    const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });

    return { message: 'Login Successful', token , username:user.username};
  }

  async forgotPassword(email:string){
    const users = await this.getUsers();
    const user = users.find((u) => u.email === email);

    if(!user){
      throw new NotFoundException('User not found')
    }

    const resetToken = jwt.sign({ email :user.email}, SECRET_KEY,{expiresIn:'15m'});
  

  user.resetToken = resetToken;
  await this.saveUsers(users);

  return {message :'Reset token generated' , resetToken};

}

async resetPassword(token:string,newPassword:string){
  try{
    const decoded = jwt.verify(token,SECRET_KEY);
    const decodedToken = decoded as jwt.JwtPayload;
    const users = await this.getUsers();
    const user = users.find((u) => u.email === decodedToken.email);

    if (!user || user.resettoken ! == token){
      throw new UnauthorizedException('Invalid or expired token');
    }

    user.password = await bcrypt.hash(newPassword,10);
    delete user.resetToken;

    await this.saveUsers(users);

    return {message:'Password reset successful'};
  }catch(error){
    throw new UnauthorizedException('Invalid or expired token');
  }
}

}
