import { Controller, Get, Post, Req, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/guards/jwt.auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @UseGuards(JwtAuthGuard)
  @Get()
  getHello(@Request() req) {
    console.log('---------------------------------');    
    console.log(req);    
    console.log('--------------------------------');    
    return req.user;
  }

  @Get('hi')
  getHi(@Request() req) {
    console.log('---------------------------------');    
    console.log(req);    
    console.log('--------------------------------');    
    return req.user;
  }

  @Get('hello')
  hello() {
    return 'hello';
  }
}
