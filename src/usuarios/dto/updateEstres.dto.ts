import { PartialType } from "@nestjs/mapped-types";
import { IsString, Length } from "class-validator";
import {ValidationMessages} from '../../helpers/validation.messages'

import { CreateUsuarioDto } from './create-usuario.dto'

export class UpDateEstresDto extends PartialType(CreateUsuarioDto){

    @IsString()
    @Length(1,30,{message:ValidationMessages.IMPUT_LONGITUD})
    nivelEstres_usuario:string;
}