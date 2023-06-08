import { IsNumber, IsString, Length } from "class-validator";
import { ValidationMessages } from "src/helpers/validation.messages";

export class CreateComentarioDto {
    @IsString()
    @Length(1,250,{message:ValidationMessages.IMPUT_NOMBRE})
    texto_comentario:string;

    @IsString()
    @Length(1,30,{message:ValidationMessages.IMPUT_NOMBRE})
    tipoModulo:string;
    
    @IsNumber()
    cuenta:number;
}
