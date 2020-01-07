import { ExecutionContext, Injectable, CanActivate } from '@nestjs/common';

@Injectable()
export class LogoutGuard implements CanActivate {
    async canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest();
        return request.logout();
    }
}
