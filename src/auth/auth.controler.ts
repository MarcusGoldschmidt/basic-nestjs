import {Body, Controller, Get, Param, Post, Redirect, UseGuards} from '@nestjs/common';
import {RegisterDto} from './dto/registerDto';
import {AuthService} from './auth.service';
import {LoginDto} from './dto/loginDto';
import UserService from '../user/user.service';
import {LoginGuard} from '../common/guards/login.guard';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService
    ) {
    }

    @Post('login')
    @UseGuards(LoginGuard)
    @Redirect('admin')
    login(@Body() login: LoginDto) {
        return login;
    }

    @Post('register')
    @Redirect('admin')
    async register(
        @Body() register: RegisterDto,
    ): Promise<any> {
        const result = await this.userService.createUser(register);
        if (!result) {
            return {
                url: 'login',
            };
        }
    }

    @Get('validate/:token')
    validateAccount(@Param() token: string): string {
        return '';
    }

    @Post('password/forgot')
    SendResetPasswordEmail(): string {
        return '';
    }
}
