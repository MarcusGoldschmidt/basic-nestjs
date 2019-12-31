import {Injectable} from '@nestjs/common';
import {UserEntity} from 'src/auth/user.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import * as Crypt from 'bcrypt';
import {RegisterDto} from './dto/registerDto';
import {Permission} from './enuns/permission.enum';
import {SECRET} from '../config';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) {
    }

    async Autenticate(email: string, password: string): Promise<boolean> {
        const user = await this.userRepository
            .createQueryBuilder()
            .where('email = :email', {email})
            .getOne();

        return await Crypt.compare(password, user.password);
    }

    async CreateUser(data: RegisterDto): Promise<UserEntity> {
        const user = this.userRepository.create();

        user.email = data.email;

        user.verified = false;
        user.permission = Permission.Common;
        user.password = await Crypt.hash(data.password, SECRET);

        await this.userRepository.save(user);

        return user;
    }

}
