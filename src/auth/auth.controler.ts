import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {RegisterDto} from './dto/registerDto';
import {AuthService} from './auth.service';
import {LoginDto} from './dto/loginDto';
import {UserEntity} from './user.entity';

@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() login: LoginDto): string {
    return '';
  }

  @Post('register')
  async register(@Body() register: RegisterDto): Promise<UserEntity> {
    return await this.authService.CreateUser(register);
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
