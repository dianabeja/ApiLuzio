import { IsString, Length } from "class-validator";
import { ValidationMessages } from "src/helpers/validation.messages";
import { PartialType } from "@nestjs/mapped-types";
import { CreateUsuarioActEstreDto } from "./create-usuario-act-estres.dto";

export class UpdateUActEstres extends PartialType(CreateUsuarioActEstreDto){
    @IsString()
    @Length(1,20,{message:ValidationMessages.IMPUT_NOMBRE} )
    estado_usuarioActEstres: string;

}