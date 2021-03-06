import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import config from '../typeormconfig';
import { Users } from './entities/user.entity';
import { Posts } from './entities/posts.entity';
import { Reviews } from './entities/review.entity';
import { Notices } from './entities/notice.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsersModule,
    AuthModule,
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([Users, Posts, Reviews, Reviews, Notices]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
