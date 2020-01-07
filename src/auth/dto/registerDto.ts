import {IsEmail, IsNotEmpty, Equals, MinLength, IsString, Validate} from 'class-validator';

export class RegisterDto {

    @IsNotEmpty()
    @IsString()
    @MinLength(10)
    name: string;

    @IsEmail()
    email: string;

    @MinLength(6)
    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    @Validate(() => this.password === this.confirmPassword)
    confirmPassword: string;
}
