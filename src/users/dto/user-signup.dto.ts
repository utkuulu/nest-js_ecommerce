import { IsNotEmpty, IsString, IsEmail, MinLength } from "class-validator";
import { UserSignInDto } from "./user-signin.dto";

export class UserSignUpDto extends UserSignInDto{
    @IsNotEmpty({message: 'İsim Alanı Zorunludur'})
    @IsString({message: 'isim Alanı String Olmak Zorunda'})
    name: string;
}