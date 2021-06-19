import { Controller, Get, Post, Req, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/jwt.auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @UseGuards(JwtAuthGuard)
  @Get()
  getHello(@Request() req) {
    return req.user;
  }
}
