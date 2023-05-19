import { PartialType } from "@nestjs/mapped-types";
import { IsString, Length, IsNumber } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
import {ValidationMessages} from '../../helpers/validation.messages'

import { CreateUsuarioDto } from './create-usuario.dto'
export enum UsuarioSexo {
    Hombre = 'H',
    Mujer = 'M',
  }
export class actualizarDatosDto extends PartialType(CreateUsuarioDto){
    @IsString()
  @Length(1, 30, { message: ValidationMessages.IMPUT_NOMBRE })
  readonly nombre_usuario: string;

  @IsString()
  @Length(1, 30, { message: ValidationMessages.IMPUT_NOMBRE })
  apellidos_usuario: string;

  @IsString()
  @Length(1, 1, { message: ValidationMessages.IMPUT_LONGITUD })
  readonly sexo_usuario: UsuarioSexo;

  @IsNumber()
  @ApiProperty({
    description: 'La edad del usuario',
    minimum: 17,
    maximum: 39,
  })
  edad_usuario: number;

  @IsString()
  @Length(1, 20, { message: ValidationMessages.IMPUT_LONGITUD })
  IMC_usuario: string;

 /* @IsString()
  @Length(1, 30, { message: ValidationMessages.IMPUT_LONGITUD })
  nivelEstres_usuario: string;*/
}