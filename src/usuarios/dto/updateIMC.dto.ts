import { PartialType } from "@nestjs/mapped-types";
import { IsString, Length } from "class-validator";
import {ValidationMessages} from '../../helpers/validation.messages'

import { CreateUsuarioDto } from './create-usuario.dto'

export class UpDateIMCDto extends PartialType(CreateUsuarioDto){
    @IsString()
    @Length(1,20,{message:ValidationMessages.IMPUT_LONGITUD})
    IMC_usuario:string;

    peso: number;
}