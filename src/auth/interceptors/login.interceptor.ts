import {CallHandler, ExecutionContext, Injectable, LoggerService, NestInterceptor} from '@nestjs/common';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {IncomingMessage} from 'http';
import {UserEntity} from '../../user/user.entity';
import {AuthService} from '../auth.service';
import UserService from '../../user/user.service';
import {AppLoggerService} from '../../infra/logger/logger.service';
import AuthException from '../../common/exceptions/auth.exception';

@Injectable()
export class LoginInterceptor implements NestInterceptor {

    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService,
        private readonly logger: AppLoggerService) {
    }

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const request = context.switchToHttp().getRequest() as IncomingMessage;

        return next.handle().pipe(
            // Execution after
            map(async (data: {user: UserEntity, password: string}) => {

                this.logger.log(`${data.user.name} try to login from : ${data.user.rememberIp}`);

                if (data.user && await this.authService.validate(data.user.email, data.password)) {
                    // @ts-ignore
                    request.session.user = {
                        id: data.user.id,
                        permission: data.user.permission,
                        name: data.user.name,
                        email: data.user.email,
                        // @ts-ignore
                        rememberToken: request.session.id,
                        rememberIp: data.user.rememberIp,
                    };

                    await this.userService.updateSessionAndIp(
                        data.user.id,
                        // @ts-ignore
                        request.session.id,
                        data.user.rememberIp,
                    );

                    this.logger.log(`${data.user.name} successful login`);
                    // @ts-ignore
                    this.logger.log(`${data.user.name} has SessionId: ${request.session.id}`);

                    return {status: 200};
                }
                this.logger.log(`${data.user.name} failed login`);
                throw new AuthException();
            }),
        );
    }
}
