//importar decoradores de la libreria class-validator y class-transformer
import { IsNumber, IsString, Length } from 'class-validator';
import { ValidationMessages } from 'src/helpers/validation.messages';

//crear dto para cuentas
export class CreateCuentaDto {
  //Decorador para string y tamaño de dato
  @IsString()
  @Length(8, 8, { message: ValidationMessages.IMPUT_LONGITUD })
  fechaIngreso_cuenta: string;

  @IsNumber()
  usuario: number;
}
