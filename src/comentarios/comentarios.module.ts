import { Module } from '@nestjs/common';
import { ComentariosService } from './comentarios.service';
import { ComentariosController } from './comentarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cuenta } from 'src/cuenta/entities/cuenta.entity';
import { CuentaModule } from 'src/cuenta/cuenta.module';
import { Comentario } from './entities/comentario.entity';
import { ComentariosFactory } from 'src/Fabrica/Entidades/cometarios.factory';

@Module({
  controllers: [ComentariosController],
  providers: [ComentariosService, ComentariosFactory],
  imports: [TypeOrmModule.forFeature([Cuenta, Comentario, ComentariosFactory]), CuentaModule],
  exports: [ComentariosService]
})

export class ComentariosModule {}

