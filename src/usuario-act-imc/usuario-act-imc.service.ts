import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { CreateUsuarioActImcDto } from './dto/create-usuario-act-imc.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioActImc } from './entities/usuario-act-imc.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { ActImcService } from 'src/act_imc/act_imc.service';
import { AstPath } from 'prettier';

@Injectable()
export class UsuarioActImcService {
  constructor(
    @InjectRepository(UsuarioActImc)
    private readonly uActImcRepository: Repository<UsuarioActImc>,
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
    @Inject(forwardRef(() => ActImcService))
    private readonly actImcRepository: ActImcService,
  ) {}

  async create(createUsuarioActImcDto: CreateUsuarioActImcDto) {
    const usuario = await this.usuarioRepository.findOneById(
      createUsuarioActImcDto.correo_usuario,
    );
    const actIMC = await this.actImcRepository.findOne(
      createUsuarioActImcDto.actIMC,
    );
    if (!usuario) {
      return 'El usuario no existe :c';
    }
    if (!actIMC) {
      return 'La actividad no existe :c';
    }
    const uActImc = new UsuarioActImc();
    uActImc.estado = createUsuarioActImcDto.estado;
    uActImc.correo_usuario = createUsuarioActImcDto.correo_usuario;
    uActImc.actIMC = createUsuarioActImcDto.actIMC;
    return await this.uActImcRepository.save(uActImc);
  }

  findAll() {
    return this.uActImcRepository.find();
  }

  findOne(id: number) {
    return this.uActImcRepository.findOneById(id);
  }

  findByUsuario(usuario: string) {
    return this.uActImcRepository.find({
      where: {
        correo_usuario: usuario,
      },
    });
  }

  async findActividades(usuario: string) {
    let ArregloActividades: Array<any> = [];
    ArregloActividades = await this.uActImcRepository.find({
      where: { correo_usuario: usuario, estado: false },
    });

    let CampoObjetoActividad = ArregloActividades.map(
      (ObjetosActividades) => ObjetosActividades.actIMC,
    );

    return CampoObjetoActividad;
  }

  async update(datos: string, valor: any) {
    let datosobtener = datos.split(',');
    let usuario = datosobtener[0];
    let actividad = datosobtener[1];

    try {
      const registro = await this.uActImcRepository.findOne({
        where: { correo_usuario: usuario, actIMC: +actividad},
      });
      
      if (!registro) {
        return 'No se encontró el registro';
      }

      let id=registro.id_usuarioActIMC;
      await this.uActImcRepository.update(id, valor);

      return 'Registro actualizado correctamente';
    } catch (error) {
      return 'Error al actualizar el registro';
    }
      return "Actualizado!"
  }

  remove(id: number) {
    return 'This action removes a #${id} usuarioActImc';
  }

  async crearTodasAct(datos){
    let dato=datos.split(',');
    const  usuario=dato[0];
    const tipo=dato[1];
    const usuarios = await this.usuarioRepository.findOne({where:{
      correo_usuario:usuario}});
      if (!usuarios) {
        return 'El usuario no existe :c';
      }
      let arrayAct = await this.actImcRepository.findTipoNivel(tipo, usuarios.IMC_usuario);

      for(let i=0; i< arrayAct.length;i++){
      const uActImc = new UsuarioActImc();
      uActImc.estado = false;
      uActImc.correo_usuario = usuario;
      uActImc.actIMC = arrayAct[i].id_actIMC;
      await this.uActImcRepository.save(uActImc);
    }
    return 'Actividades registradas'
    }
  
}