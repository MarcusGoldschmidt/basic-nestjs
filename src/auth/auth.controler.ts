import {Controller, Get, Post, Body, Param} from '@nestjs/common';
import { RegisterDto } from './dto/registerDto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/loginDto';

@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() login: LoginDto): string {
    return '';
  }

  @Post('register')
  register(@Body() register: RegisterDto): string {
    return '';
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
