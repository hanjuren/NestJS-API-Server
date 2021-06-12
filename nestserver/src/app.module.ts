import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import config from '../typeormconfig';
import { Users } from './entities/user.entity';
import { Posts } from './entities/posts.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsersModule,
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([Users, Posts]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
