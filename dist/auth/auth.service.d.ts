import { UserEntity } from 'src/auth/user.entity';
import { Repository } from 'typeorm';
import { RegisterDto } from './dto/registerDto';
export declare class AuthService {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    Autenticate(email: string, password: string): Promise<boolean>;
    CreateUser(data: RegisterDto): Promise<UserEntity>;
}
