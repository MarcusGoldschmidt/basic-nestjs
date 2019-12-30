import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/auth/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {

    constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    ) {}

    async autenticate(email: string, password: string): boolean {
        let user = await this.userRepository
            .createQueryBuilder()
            .where('email = :email', {email})
            .getOne();

        
    }

}
