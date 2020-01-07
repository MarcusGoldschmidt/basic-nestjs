import {Injectable, UnauthorizedException} from '@nestjs/common';
import {PassportStrategy} from '@nestjs/passport';
import {Strategy} from 'passport-local';
import {AuthService} from './auth.service';
import {ICurrentUser} from '../common/abstractions/user/current-user.interface';

@Injectable()
export default class LocalStrategy extends PassportStrategy(Strategy) {

    constructor(
        private readonly authService: AuthService,
    ) {
        super();
    }

    async validate(
        username: string,
        password: string,
    ): Promise<ICurrentUser> {
        const user = await this.authService.validate(username, password);

        if (!user) {
            throw new UnauthorizedException();
        }
        return {
            id: user.id,
            email: user.email,
            name: user.name,
            permission: user.permission,
            rememberIp: '',
        };
    }
}
