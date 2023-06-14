import { IsString, IsNumber, Length, IsBoolean } from "class-validator";
import { ValidationMessages } from "src/helpers/validation.messages";

export class CreateUsuarioActImcDto {
    @IsBoolean()
    estado: boolean;

    @IsString()
    correo_usuario: string;

    @IsNumber()
    actIMC:number;
}
