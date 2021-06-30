import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../entities/user.entity';
import { Posts } from 'src/entities/posts.entity';
import { AuthModule } from 'src/auth/auth.module';
import { SerachController } from './search.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users, Posts]),
    forwardRef(() => AuthModule),
  ],
  controllers: [UsersController, SerachController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule { }
