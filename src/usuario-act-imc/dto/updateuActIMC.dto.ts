import { IsBoolean, IsString, Length } from "class-validator";
import { ValidationMessages } from "src/helpers/validation.messages";
import { PartialType } from "@nestjs/mapped-types";
import { CreateUsuarioActImcDto } from "./create-usuario-act-imc.dto"; 

export class UpdateUActIMC extends PartialType(CreateUsuarioActImcDto){
    @IsBoolean()
    estado: boolean;

}