import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import { ValidationPipe } from '@nestjs/common';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
// 리베이스 테스트중
  app.use(cookieParser());
  // app.use(
  //   session({
  //     resave: false,
  //     saveUninitialized: false,
  //     secret: process.env.COOKIE_SECRET,
  //     cookie: {
  //       httpOnly: true,
  //     },
  //   }),
  // );
  app.use(passport.initialize());
  // app.use(passport.session());

  // ValidationPipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 엔티티 데코레이터에 없는 값은 거름
      forbidNonWhitelisted: true, // 엔티티 데코레이터에 없는 값이 들어오면 해당 값에 대한 에러 메시지 리턴
      transform: true // 컨트롤러가 값을 받을 때 컨트롤러에 정의한 타입으로 형 변환
    })
  );

  await app.listen(3000);



  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
