import {Injectable, Ip} from '@nestjs/common';
import {UserEntity} from 'src/user/user.entity';
import * as Crypt from 'bcrypt';
import AuthException from '../common/exceptions/auth.exception';
import UserService from '../user/user.service';
import {AppLoggerService} from '../infra/logger/logger.service';

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UserService,
        private readonly logger: AppLoggerService,
    ) {
    }

    async validate(email: string, password: string): Promise<UserEntity | undefined> {
        const user = await this.userService.findByEmail(email);

        if (user && await Crypt.compare(password, user.password)) {
            this.logger.log(`${user.name} has right local passport`);
            return user;
        }
        this.logger.log(`${user.name} do not have right local passport`);
        return undefined;
    }

    async loginUser(email: string, password: string): Promise<UserEntity> {
        const user = await this.validate(email, password);

        if (!user) {
            throw new AuthException();
        }

        return user;
    }

}
