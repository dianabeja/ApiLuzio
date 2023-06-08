import {  IsString, Length } from "class-validator";
import { ValidationMessages } from "src/helpers/validation.messages";

export class GetUsuarioDto{

    @IsString()
    @Length(28,28,{message:ValidationMessages.IMPUT_LONGITUD})
    correo_usuario:string;

    @IsString()
    @Length(8,8,{message:ValidationMessages.IMPUT_LONGITUD})
    contraseña_usuario:string;
}