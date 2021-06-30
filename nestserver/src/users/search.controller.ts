import { Controller, Get, Post, Body, Patch, Param, Delete, ForbiddenException, Req, UseGuards, Inject, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users/search')
export class SerachController {
  constructor(
    private readonly usersService: UsersService,
    ) {}
  @Get('product')
  hi() {
    return this.usersService.fuck();
  }
}
