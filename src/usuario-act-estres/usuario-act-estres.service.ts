import { Injectable } from '@nestjs/common';
import { CreateUsuarioActEstreDto } from './dto/create-usuario-act-estres.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioActEstres } from './entities/usuario-act-estres.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { ActNivelEstres } from 'src/act_nivel-estres/entities/act_nivel-estres.entity';
import { UpdateUActEstres } from './dto/update-uActEstres.dto';

@Injectable()
export class UsuarioActEstresService {
  constructor(
    @InjectRepository(UsuarioActEstres)
    private readonly uActEstresRepository:Repository<UsuarioActEstres>,
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
    @InjectRepository(ActNivelEstres)
    private readonly actEstresRepository:Repository<ActNivelEstres>
  ){}

  async create(createUsuarioActEstreDto: CreateUsuarioActEstreDto) {
    const usuario=await this.usuarioRepository.findOneById(
      createUsuarioActEstreDto.usuario,
    );
    const actEstres=await this.actEstresRepository.findOneById(
      createUsuarioActEstreDto.actEstres,
    );
    if(!usuario){
      return `El usuario no existe :c`;
    }
    if(!actEstres){
      return 'La actividad no existe :c'
    }
    const uActEstres= new UsuarioActEstres;
    uActEstres.estado_usuarioActEstres=createUsuarioActEstreDto.estado_usuarioActEstres;
    uActEstres.usuario=createUsuarioActEstreDto.usuario;
    uActEstres.actEstres=createUsuarioActEstreDto.actEstres;
    return await this.uActEstresRepository.save(uActEstres);
  }

  findAll() {
    return this.uActEstresRepository.find();
  }

  findOne(id: number) {
    return this.uActEstresRepository.findOneById(id);
  }

  findByUsuario(usuario:number){
    return this.uActEstresRepository.find({
      where:{
        id_usuarioActEstres :usuario,
      }
    })
  }
  
  async findActividades(usuario: string) {
    let ArregloActividades: Array<any> = [];
    ArregloActividades = await this.uActEstresRepository.find({
      where: { usuario: usuario, estado_usuarioActEstres: false  },
    });

    let CampoObjetoActividad = ArregloActividades.map(
      (ObjetosActividades) => ObjetosActividades.actEstres,
    );

    return CampoObjetoActividad;
  }

  findByAct(id_act:number){
    return this.uActEstresRepository.find({
      where:{
        actEstres:id_act,
      }
    })
  }

  async update(datos: string, valor: any) {
    let datosobtener = datos.split(',');
    let usuario = datosobtener[0];
    let actividad = datosobtener[1];

    try {
      const registro = await this.uActEstresRepository.findOne({
        where: { usuario: usuario, actEstres: +actividad},
      });

      if (!registro) {
        return 'No se encontró el registro';
      }
      let id=registro.id_usuarioActEstres;
    
      await this.uActEstresRepository.update(id,valor);

      return 'Registro actualizado correctamente';
    } catch (error) {
      return 'Error al actualizar el registro';
    }
      return "Actualizado!"
  }

  remove(id: number) {
    return `This action removes a #${id} usuarioActEstre`;
  }

  async crearTodasAct(datos){
    let dato=datos.split(',');
    const  usuario=dato[0];
    const usuarios = await this.usuarioRepository.findOne({where:{
      correo_usuario:usuario}});
      if (!usuarios) {
        return 'El usuario no existe :c';
      }
      let arrayAct = await this.actEstresRepository.find({where: {nivel_estres:usuarios.nivelEstres_usuario}});

      for(let i=0; i< arrayAct.length;i++){
      const uActEstres = new UpdateUActEstres();
      uActEstres.estado_usuarioActEstres = false;
      uActEstres.usuario = usuario;
      uActEstres.actEstres = arrayAct[i].id_actNivelEstres;
      await this.uActEstresRepository.save(uActEstres);
    }
    return 'Actividades registradas'
    }
}
