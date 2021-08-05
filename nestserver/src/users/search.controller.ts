import { Controller, Get, Post, Body, Patch, Param, Delete, ForbiddenException, Req, UseGuards, Inject, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users/search')
export class SerachController {
  constructor(
    private readonly usersService: UsersService,
    ) {}
  @Get('product')
  hi() {
    const i = '리베이스?';
    return this.usersService.fuck();
  }
}
