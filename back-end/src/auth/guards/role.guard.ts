import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";

export class RolesGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
      const roles = this.reflector.get<string[]>('admin', context.getHandler());
      console.log('admin:', roles);
      if (!roles) {
        return true;
      }
      const request = context.switchToHttp().getRequest();
      const user = request.user;
      const hasRole = () => user.roles.some(role => roles.indexOf(role) > -1);
      console.log('hasRole', hasRole);

      return user && user.roles && hasRole();
    }
  }