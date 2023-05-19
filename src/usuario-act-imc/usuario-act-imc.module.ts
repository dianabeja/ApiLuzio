import { Module, forwardRef } from '@nestjs/common';
import { UsuarioActImcService } from './usuario-act-imc.service';
import { UsuarioActImcController } from './usuario-act-imc.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { UsuarioActImc } from './entities/usuario-act-imc.entity';
import { ActImc } from 'src/act_imc/entities/act_imc.entity';
import { ActImcModule } from 'src/act_imc/act_imc.module';
import { UsuarioActImcFactory } from 'src/Fabrica/Entidades/usuario_Act_IMC.factory';

@Module({
  controllers: [UsuarioActImcController],
  providers: [UsuarioActImcService, UsuarioActImcFactory],
  imports: [forwardRef(() =>  ActImcModule),TypeOrmModule.forFeature([UsuarioActImc,Usuario,ActImc, UsuarioActImcFactory]),UsuariosModule],
  exports: [UsuarioActImcService]
})
export class UsuarioActImcModule {}