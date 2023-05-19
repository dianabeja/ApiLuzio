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
        usuario:usuario,
      }
    })
  }
  
  findByAct(id_act:number){
    return this.uActEstresRepository.find({
      where:{
        actEstres:id_act,
      }
    })
  }

  update(id:number, valor:UpdateUActEstres){
    return this.uActEstresRepository.update(id, valor);
  }

  remove(id: number) {
    return `This action removes a #${id} usuarioActEstre`;
  }
}
