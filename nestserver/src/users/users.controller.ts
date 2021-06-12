import { Controller, Get, Post, Body, Patch, Param, Delete, ForbiddenException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  async create(@Body() data: CreateUserDto) {
    const result = await this.usersService.create(
      data.email,
      data.name,
      data.age,
      data.job,
    );
    if (result) {
      return { success: true, message: '회원가입 성공입니다.' };
    } else {
      throw new ForbiddenException();
    }
  }
  // 유저 정보 보기
  @Get()
  async findAllUserInfo() {
    const info = await this.usersService.findAllUserInfo();
    return info;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
