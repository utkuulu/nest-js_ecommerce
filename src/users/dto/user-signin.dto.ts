import { IsNotEmpty, IsEmail, MinLength } from "class-validator";

export class UserSignInDto {
        
    @IsNotEmpty({message: 'Email Boş Bırakılamaz'})
    @IsEmail({},{message: 'Email Formatında Giriş Yapın'})
    email: string;

    @IsNotEmpty({message: 'Password Alanı Boş Bırakılamaz'})
    @MinLength(5, {message: 'Password Minimum 5 Karakterden Oluşmalı'})
    password: string;
}