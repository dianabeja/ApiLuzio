import { IsBoolean, IsString, Length } from "class-validator";
import { ValidationMessages } from "src/helpers/validation.messages";
import { PartialType } from "@nestjs/mapped-types";
import { CreateUsuarioActEstreDto } from "./create-usuario-act-estres.dto";

export class UpdateUActEstres extends PartialType(CreateUsuarioActEstreDto){
    @IsBoolean()
    estado_usuarioActEstres: boolean;

}