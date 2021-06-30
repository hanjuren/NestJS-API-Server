import { forwardRef, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
    private jwtService: JwtService,
    ) { }

  async validateUser(email: string): Promise<any> {
    const user = await this.usersService.findOneEmail(email);
    if (user) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = { no: user.id, email: user.email, age: user.age, role: user.role };
    return { access_token: this.jwtService.sign(payload), refresh_token: this.jwtService.sign(payload) };
  }

  // verify(token: string) {
  //   const decoded = this.jwtService.verify(token, {
  //     secret: 'hanjuren',
  //   });
  //   const user = this.usersService.findOneEmail(decoded.email);

  //   if(!user) {
  //     throw new UnauthorizedException();
  //   }

  //   return user;
  // }

  tokenUnauthorized () {
    return "this token is Unauthorized"
  }
}
