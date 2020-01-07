import {Body, Controller, Get, Ip, Param, Post, Redirect, UseGuards, UseInterceptors} from '@nestjs/common';
import {RegisterDto} from './dto/registerDto';
import {AuthService} from './auth.service';
import {LoginDto} from './dto/loginDto';
import UserService from '../user/user.service';
import {LoginInterceptor} from './interceptors/login.interceptor';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService,
    ) {
    }

    @Post('login')
    @UseInterceptors(LoginInterceptor)
    async login(@Body() login: LoginDto, @Ip() ip: string) {
        const user = await this.userService.findByEmail(login.email);
        user.rememberIp = ip;
        return {user, password: login.password};
    }

    @Post('register')
    @UseInterceptors(LoginInterceptor)
    async register(
        @Body() register: RegisterDto,
        @Ip() ip: string,
    ): Promise<any> {
        const user = await this.userService.createUser(register);
        user.rememberIp = ip;

        return {user, password: register.password};
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
