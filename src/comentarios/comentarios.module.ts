import { Module } from '@nestjs/common';
import { ComentariosService } from './comentarios.service';
import { ComentariosController } from './comentarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comentario } from './entities/comentario.entity';
import { ComentariosFactory } from 'src/Fabrica/Entidades/cometarios.factory';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { UsuariosModule } from 'src/usuarios/usuarios.module';

@Module({
  controllers: [ComentariosController],
  providers: [ComentariosService, ComentariosFactory],
  imports: [TypeOrmModule.forFeature([ Comentario, ComentariosFactory, Usuario]), UsuariosModule],
  exports: [ComentariosService]
})

export class ComentariosModule {}

