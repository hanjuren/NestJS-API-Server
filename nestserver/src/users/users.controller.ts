import { Controller, Get, Post, Body, Patch, Param, Delete, ForbiddenException, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  // @Post()
  // async create(@Body() data: CreateUserDto) {
  //   const result = await this.usersService.create(
  //     data.email,
  //     data.name,
  //     data.age,
  //     data.job,
  //   );
  //   if (result) {
  //     return { success: true, message: '회원가입 성공입니다.' };
  //   } else {
  //     throw new ForbiddenException();
  //   }
  // }
  // // 유저 정보 보기

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Req() req) {
    console.log(req);
    return req.user;
  }
                                                                          
}
