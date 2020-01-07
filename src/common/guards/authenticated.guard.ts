import { ExecutionContext, Injectable, CanActivate } from '@nestjs/common';

@Injectable()
export default class AuthenticatedGuard implements CanActivate {
    async canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest();
        return request.isAuthenticated();
    }
}
