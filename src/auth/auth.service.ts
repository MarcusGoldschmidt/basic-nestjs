import {Injectable, Ip} from '@nestjs/common';
import {UserEntity} from 'src/user/user.entity';
import * as Crypt from 'bcrypt';
import AuthException from '../common/exceptions/auth.exception';
import UserService from '../user/user.service';

@Injectable()
export class AuthService {

    private readonly SESSION_NAME = 'current-user';

    constructor(
        private readonly userService: UserService,
    ) {
    }

    async validate(email: string, password: string): Promise<UserEntity | undefined> {
        const user = await this.userService.findByEmail(email);

        if (!user || !(await Crypt.compare(password, user.password))) {
            return undefined;
        }

        return user;
    }

    async loginUser(email: string, password: string): Promise<boolean> {
        const user = await this.validate(email, password);

        if (!user) {
            throw new AuthException();
        }

        return true;
    }

    async logout() {
    }
}
