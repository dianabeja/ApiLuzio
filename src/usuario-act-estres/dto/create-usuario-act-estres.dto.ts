import { IsString, IsNumber, Length, IsBoolean } from "class-validator";
import { ValidationMessages } from "src/helpers/validation.messages";

export class CreateUsuarioActEstreDto {
    @IsBoolean()
    estado_usuarioActEstres: boolean;

    @IsString()
    usuario:string;

    @IsNumber()
    actEstres:number;
}
