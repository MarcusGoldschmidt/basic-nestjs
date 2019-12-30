import { IsEmail, IsNotEmpty, Equals } from 'class-validator';

export class RegisterDto {

    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    @Equals(this.password)
    confirmPassword: string;
}
