import {Module} from '@nestjs/common';
import {AuthController} from './auth.controler';
import {AuthService} from './auth.service';
import {UserModule} from '../user/user.module';
import LocalStrategy from './local.strategy';
import {PassportModule} from '@nestjs/passport';
import {LoginInterceptor} from './interceptors/login.interceptor';
import {LoggerModule} from '../infra/logger/logger.module';

@Module({
    imports: [
        UserModule,
        PassportModule,
        LoggerModule,
    ],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy, LoginInterceptor],
    exports: [AuthService],
})
export class AuthModule {
}
