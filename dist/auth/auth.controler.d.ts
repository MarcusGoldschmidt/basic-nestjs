import { RegisterDto } from './dto/registerDto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/loginDto';
import { UserEntity } from './user.entity';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(login: LoginDto): string;
    register(register: RegisterDto): Promise<UserEntity>;
    validateAccount(token: string): string;
    SendResetPasswordEmail(): string;
}
