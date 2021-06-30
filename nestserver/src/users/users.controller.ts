import { Controller, Get, Post, Body, Patch, Param, Delete, ForbiddenException, Req, UseGuards, Inject, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt.auth.guard';
import { Roles } from 'src/auth/dacorator/roles.decorator';
import { UserRole } from 'src/entities/user.entity';
import { Request } from 'express';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
    ) { }
  // 회원가입 
  @Post()
  async create(@Body() data: CreateUserDto) {
    const result = await this.usersService.create(
      data.email,
      data.name,
      data.age,
      data.job,
      data.role,
    );
    if (result) {
      return { success: true, message: '회원가입 성공입니다.' };
    } else {
      throw new ForbiddenException();
    }
  }
  // 모든 유저 정보 보기
  @Roles(UserRole.ADMIN, UserRole.GHOST)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get()
  async allUserGet(@Req() req) {
      const data = await this.usersService.allUserGet();
      const token = req.headers.authorization;
      return {data, token};
  }

  // @Get('all')
  // async all() {
  //   return this.authService.
  // }
  // 로그인
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req: Request) {
    return this.authService.login(req.user);
  }
                                                                          
}
