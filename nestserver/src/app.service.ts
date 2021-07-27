import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  hi() {
    const fsafsa = 'aa';
    return 'fdsfa';
  }
}
