import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { UsuarioFactory } from 'src/Fabrica/Entidades/usuarios.factory';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario, UsuarioFactory])],
  controllers: [UsuariosController],
  providers: [UsuariosService, UsuarioFactory], 
  exports: [UsuariosService]
})
export class UsuariosModule {}
