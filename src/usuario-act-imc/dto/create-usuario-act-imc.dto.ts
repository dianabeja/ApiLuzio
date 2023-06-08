import { IsString, IsNumber, Length, IsBoolean } from "class-validator";
import { ValidationMessages } from "src/helpers/validation.messages";

export class CreateUsuarioActImcDto {
    @IsBoolean()
    estado: boolean;

    @IsNumber()
    usuario:number;

    @IsNumber()
    actIMC:number;
}
