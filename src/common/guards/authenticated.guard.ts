import {ExecutionContext, Injectable, CanActivate} from '@nestjs/common';
import {IncomingMessage} from 'http';

@Injectable()
export default class AuthenticatedGuard implements CanActivate {
    async canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest();

        return request.isAuthenticated();
    }
}
