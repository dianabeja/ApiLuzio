import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CuentaModule } from './cuenta/cuenta.module';
import { Usuario } from './usuarios/entities/usuario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ActImcModule } from './act_imc/act_imc.module';
import { ActNivelEstresModule } from './act_nivel-estres/act_nivel-estres.module';
import { ActNivelEstres } from './act_nivel-estres/entities/act_nivel-estres.entity';
import { ActImc } from './act_imc/entities/act_imc.entity';
import { Cuenta } from './cuenta/entities/cuenta.entity';
import { ComentariosModule } from './comentarios/comentarios.module';
import { Comentario } from './comentarios/entities/comentario.entity';
import { UsuarioActImcModule } from './usuario-act-imc/usuario-act-imc.module';
import { UsuarioActImc } from './usuario-act-imc/entities/usuario-act-imc.entity';
import { UsuarioActEstresModule } from './usuario-act-estres/usuario-act-estres.module';
import { UsuarioActEstres } from './usuario-act-estres/entities/usuario-act-estres.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '240402',
      database: 'ApiJorge',
      entities: [
        Usuario,
        ActNivelEstres,
        ActImc,
        Cuenta,
        Comentario,
        UsuarioActImc,
        UsuarioActEstres,
      ],
      synchronize: false,
    }),
    UsuariosModule,
    ActImcModule,
    ActNivelEstresModule,
    CuentaModule,
    ComentariosModule,
    UsuarioActImcModule,
    UsuarioActEstresModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
