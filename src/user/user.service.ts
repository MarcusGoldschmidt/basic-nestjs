import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {UserEntity} from './user.entity';
import {Repository} from 'typeorm';
import {RegisterDto} from '../auth/dto/registerDto';
import {Permission} from '../common/enuns/permission.enum';
import * as Crypt from 'bcrypt';
import Config from '../config';
import InvalidArgumentsException from '../common/exceptions/invalid-arguments.exception';

@Injectable()
export default class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) {
    }

    async findByEmail(email: string): Promise<UserEntity | undefined> {
        return await this.userRepository
            .createQueryBuilder()
            .where('email = :email', {email})
            .getOne();
    }

    async createUser(data: RegisterDto): Promise<UserEntity | undefined> {
        if (data.password !== data.confirmPassword) {
            throw new InvalidArgumentsException('Confirmação da senha não é igual a senha original');
        }

        const user = this.userRepository.create();

        user.name = data.name;
        user.email = data.email;

        user.verified = false;
        user.permission = Permission.Common;

        user.password = await Crypt.hash(data.password, Config.APP_SALT);

        await this.userRepository.save(user);

        return user;
    }
}
