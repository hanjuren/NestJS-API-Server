import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from '../entities/user.entity';
import { Posts } from 'src/entities/posts.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
    @InjectRepository(Posts)
    private postRepository: Repository<Posts>,
  ) { }
  // 회원가입
  async create(email: string, name: string, age: number, job: string) {
    const exUser = await this.userRepository.findOne({ where: { email } });
    if (exUser) {
      throw new UnauthorizedException('이미 존재하는 사용자 입니다.');
    }
    await this.userRepository.save({
      email,
      name,
      age,
      job,
    });
    return true;
  }

  async findAllUserInfo() {
    const exInfo = this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.Posts', 'p')
      .select([
        'user.id',
        'user.email',
        'p.title',
        'p.content',
      ])
      .where('user.id = :id', { id: 1 })
      .getOne();
    // const exInfo = await this.userRepository.findOne({
    //   where: { id: 2 },
    //   relations: ["Posts"],
    // })
    return exInfo;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
