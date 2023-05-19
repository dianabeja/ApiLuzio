import { Module } from '@nestjs/common';
import { UsuarioActEstresService } from './usuario-act-estres.service';
import { UsuarioActEstresController } from './usuario-act-estres.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioActEstres } from './entities/usuario-act-estres.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { ActNivelEstres } from 'src/act_nivel-estres/entities/act_nivel-estres.entity';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { ActNivelEstresModule } from 'src/act_nivel-estres/act_nivel-estres.module';
import { UsuarioActEstresFactory } from 'src/Fabrica/Entidades/usuario_Act_Estres.factory';

@Module({
  controllers: [UsuarioActEstresController],
  providers: [UsuarioActEstresService, UsuarioActEstresFactory],
  exports: [UsuarioActEstresService],
  imports: [TypeOrmModule.forFeature([UsuarioActEstres,Usuario,ActNivelEstres, UsuarioActEstresFactory]),UsuariosModule, ActNivelEstresModule]
})
export class UsuarioActEstresModule {}
