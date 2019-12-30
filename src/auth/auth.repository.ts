import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/auth/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthRepository {

    constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    ) {}

    findOne(id: number): Promise<UserEntity> {
        return this.userRepository.findOneOrFail(id);
    }
}
