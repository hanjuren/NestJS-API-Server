import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) { }

  async validateUser(email: string): Promise<any> {
    const user = await this.usersService.findOneEmail(email);
    if (user) {
      return user;
    }
    return null;
  }
}
