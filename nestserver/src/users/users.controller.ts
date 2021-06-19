import { Controller, Get, Post, Body, Patch, Param, Delete, ForbiddenException, Req, UseGuards, Inject, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
    ) { }

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

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req) {
    return this.authService.login(req.user);
  }
                                                                          
}
