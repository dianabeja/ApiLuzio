import { Module } from '@nestjs/common';
import { ActNivelEstresService } from './act_nivel-estres.service';
import { ActNivelEstresController } from './act_nivel-estres.controller';
import { ActNivelEstres } from './entities/act_nivel-estres.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActEstresFactory } from 'src/Fabrica/Entidades/act_NivelEstres.factory';

@Module({
  imports: [TypeOrmModule.forFeature([ActNivelEstres, ActEstresFactory])],
  controllers: [ActNivelEstresController],
  providers: [ActNivelEstresService, ActEstresFactory],
  exports : [ActNivelEstresService]
})
export class ActNivelEstresModule {}
