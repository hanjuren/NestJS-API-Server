import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRole, Users } from '../entities/user.entity';
import { Posts } from 'src/entities/posts.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
    @InjectRepository(Posts)
    private postRepository: Repository<Posts>,
  ) { }

  async findOneEmail(email: string): Promise<Users | undefined> {
    return this.userRepository.findOne({ where: { email } });
  };

  // async findByEmal(email: string) {
  //   const user = await this.userRepository.findOne({ where: { email } });
  //   console.log(user);
  //   return user;
  // }
  // 회원가입
  async create(userData: CreateUserDto) {
    const email = userData.email;
    const exUser = await this.userRepository.findOne({ where: { email } });
    if (exUser) {
      throw new UnauthorizedException('이미 존재하는 사용자 입니다.');
    }
    await this.userRepository.save({
      ...userData
    });
    return true;
  }

  async allUserGet() {
    const data = await this.userRepository.find();
    return data;
  }
  async findAllUserInfo(id: any) {
    const exInfo = this.userRepository
      .createQueryBuilder('u')
      .leftJoinAndSelect('u.Reviews', 'writer')
      .leftJoinAndSelect('u.Reviews2', 'seller')
      .select([
        'u.id',
        'u.email',
        'p.title',
        'p.content',
        'p.Userid',
      ])
      .where(`u.id = ${id}`)
      .getMany();
    return exInfo;
  }
  fuck() {
    return 'fjkdlfjlkas';
  }
}
