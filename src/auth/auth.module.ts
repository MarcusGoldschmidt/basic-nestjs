import {Module} from '@nestjs/common';
import {AuthController} from './auth.controler';
import {AuthService} from './auth.service';
import {UserModule} from '../user/user.module';
import LocalStrategy from './local.strategy';
import {SessionSerializer} from './session-serializer';
import {PassportModule} from '@nestjs/passport';

@Module({
    imports: [
        UserModule,
        PassportModule,
    ],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy, SessionSerializer],
    exports: [AuthService],
})
export class AuthModule {
}
