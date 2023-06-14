import { Module } from '@nestjs/common';
import { ActNivelEstresService } from './act_nivel-estres.service';
import { ActNivelEstresController } from './act_nivel-estres.controller';
import { ActNivelEstres } from './entities/act_nivel-estres.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActEstresFactory } from 'src/Fabrica/Entidades/act_NivelEstres.factory';
import { UsuarioActEstres } from 'src/usuario-act-estres/entities/usuario-act-estres.entity';
import { UsuarioActEstresModule } from 'src/usuario-act-estres/usuario-act-estres.module';
@Module({
  imports: [UsuarioActEstresModule, TypeOrmModule.forFeature([ActNivelEstres, ActEstresFactory, UsuarioActEstres])],
  controllers: [ActNivelEstresController],
  providers: [ActNivelEstresService, ActEstresFactory],
  exports : [ActNivelEstresService]
})
export class ActNivelEstresModule {}
