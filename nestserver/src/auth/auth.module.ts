import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/entities/user.entity';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt.auth.guard';
import { RolesGuard } from './guards/roles.guard';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';

@Module({
  imports: [
    forwardRef(() => UsersModule),
    PassportModule.register({ defaultStrategy: 'jwt' }), 
    TypeOrmModule.forFeature([Users]),
    JwtModule.register({
      secret: 'hanjuren',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, RolesGuard, JwtAuthGuard],
  exports: [AuthService, JwtModule],
})
export class AuthModule { }
