import {IsString, Length} from 'class-validator'
import { ValidationMessages } from "src/helpers/validation.messages";

export class CreateActImcDto {
    @IsString()
    @Length(0,20,{message:ValidationMessages.IMPUT_NOMBRE})
    nombre_actIMC:string;

    @IsString()
    @Length(0,500,{message:ValidationMessages.IMPUT_NOMBRE})
    descripcion_actIMC:string;

    @IsString()
    @Length(0,20,{message:ValidationMessages.IMPUT_NOMBRE})
    tipo_actIMC:string;

    @IsString()
    @Length(0,20,{message:ValidationMessages.IMPUT_NOMBRE})
    nivel_IMC:string;

    @IsString()
    @Length(0,200,{message:ValidationMessages.IMPUT_NOMBRE})
    imagen_actIMC:string;
}

