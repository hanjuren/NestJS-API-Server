import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';
import { Users } from '../entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
    private userService: UsersService
  ) { }

  async validateUser(email: string) {
    const user = await this.userService.findByEmal(email)
    console.log(email, user);
    if (!user) {
      return null;
    } else {
      const { ...userWithoutPassword } = user;
      return userWithoutPassword;
    }
  }
}
