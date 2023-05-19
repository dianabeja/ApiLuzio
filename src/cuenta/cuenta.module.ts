import { Module } from '@nestjs/common';
import { CuentaService } from './cuenta.service';
import { CuentaController } from './cuenta.controller';
import { Cuenta } from './entities/cuenta.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { CuentasFactory } from 'src/Fabrica/Entidades/cuentas.factory';

@Module({
  controllers: [CuentaController],
  providers: [CuentaService, CuentasFactory],
  imports: [TypeOrmModule.forFeature([Cuenta,Usuario,CuentasFactory]),UsuariosModule],
  exports: [CuentaService]
})
export class CuentaModule {}