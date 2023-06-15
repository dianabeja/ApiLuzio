import { Module, forwardRef } from '@nestjs/common';
import { ActImcService } from './act_imc.service';
import { ActImcController } from './act_imc.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActImc } from './entities/act_imc.entity';
import { ActImcFactory } from 'src/Fabrica/Entidades/act_IMC.factory';
import { UsuarioActImc } from 'src/usuario-act-imc/entities/usuario-act-imc.entity';
import { UsuarioActImcModule } from 'src/usuario-act-imc/usuario-act-imc.module';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
@Module({
  imports: [UsuarioActImcModule, TypeOrmModule.forFeature([ActImc, ActImcFactory, UsuarioActImc, Usuario]), UsuarioActImcModule, UsuariosModule], 
  controllers: [ActImcController],
  providers: [ActImcService, ActImcFactory],
  exports: [ActImcService]
})
export class ActImcModule {}
