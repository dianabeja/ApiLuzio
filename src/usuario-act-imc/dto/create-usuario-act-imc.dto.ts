import { IsString, IsNumber, Length } from "class-validator";
import { ValidationMessages } from "src/helpers/validation.messages";

export class CreateUsuarioActImcDto {
    @IsString()
    @Length(1,20,{message:ValidationMessages.IMPUT_NOMBRE} )
    estado: string;

    @IsNumber()
    usuario:number;

    @IsNumber()
    actIMC:number;
}
