import { Injectable } from '@nestjs/common';
import { UsersService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(name: string, pass: string): Promise<any> {
    const user = await this.usersService.getUser(name);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}