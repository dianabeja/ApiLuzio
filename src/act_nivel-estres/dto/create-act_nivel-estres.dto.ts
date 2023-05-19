import {IsString, Length} from 'class-validator'
import { ValidationMessages } from "src/helpers/validation.messages";

export class CreateActNivelEstresDto {
    @IsString()
    @Length(0,20,{message:ValidationMessages.IMPUT_NOMBRE})
    nombre_actNivelEstres:string;

    @IsString()
    @Length(0,100,{message:ValidationMessages.IMPUT_NOMBRE})
    descripcion_actNivelEstres:string;

    @IsString()
    @Length(0,20,{message:ValidationMessages.IMPUT_NOMBRE})
    nivel_estres:string;

    @IsString()
    @Length(0,200,{message:ValidationMessages.IMPUT_NOMBRE})
    imagen_actNivelEstres:string;
}
