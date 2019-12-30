import { UserEntity } from 'src/auth/user.entity';
import { Repository } from 'typeorm';
export declare class AuthRepository {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    findOne(id: number): Promise<UserEntity>;
}
