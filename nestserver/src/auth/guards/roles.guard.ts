import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { UserRole } from 'src/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { ROLES_KEY } from '../dacorator/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(ROLES_KEY,[
    //   context.getHandler(),
    //   context.getClass(),
    // ])
    // if (!requiredRoles) {
    //   return true;
    // }
    // const { user } = context.switchToHttp().getRequest();
    //['admin', 'editor']
    const roles = this.reflector.get<UserRole[]>(ROLES_KEY, context.getHandler());
    console.log(roles);
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return roles.some((role) => user.role?.includes(role));
  }
}

