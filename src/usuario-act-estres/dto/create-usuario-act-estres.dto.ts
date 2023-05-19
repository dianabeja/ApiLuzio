import { IsString, IsNumber, Length } from "class-validator";
import { ValidationMessages } from "src/helpers/validation.messages";

export class CreateUsuarioActEstreDto {
    @IsString()
    @Length(1,20,{message:ValidationMessages.IMPUT_NOMBRE} )
    estado_usuarioActEstres: string;

    @IsNumber()
    usuario:number;

    @IsNumber()
    actEstres:number;
}
