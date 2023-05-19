import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { CreateUsuarioActImcDto } from './dto/create-usuario-act-imc.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioActImc } from './entities/usuario-act-imc.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { ActImc } from 'src/act_imc/entities/act_imc.entity';
import { UpdateUActIMC } from './dto/updateuActIMC.dto';
import { ActImcService } from 'src/act_imc/act_imc.service';

@Injectable()
export class UsuarioActImcService {
  constructor(
    @InjectRepository(UsuarioActImc)
    private readonly uActImcRepository:Repository<UsuarioActImc>,
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
    @Inject(forwardRef(() => ActImcService)) 
    private readonly actImcRepository:ActImcService
  ){}

  async create(createUsuarioActImcDto: CreateUsuarioActImcDto) {
    const usuario=await this.usuarioRepository.findOneById(
      createUsuarioActImcDto.usuario,
    );
    const actIMC=await this.actImcRepository.findOne(
      createUsuarioActImcDto.actIMC,
    );
    if(!usuario){
      return 'El usuario no existe :c';
    }
    if(!actIMC){
      return 'La actividad no existe :c'
    }
    const uActImc= new UsuarioActImc;
    uActImc.estado=createUsuarioActImcDto.estado;
    uActImc.usuario=createUsuarioActImcDto.usuario;
    uActImc.actIMC=createUsuarioActImcDto.actIMC;
    return await this.uActImcRepository.save(uActImc);
  }

  findAll() {
    return this.uActImcRepository.find();
  }

  findOne(id: number) {
    return this.uActImcRepository.findOneById(id);
  }

  findByUsuario(usuario:number){
    return this.uActImcRepository.find({
      where:{
        usuario:usuario,
      }
    })
  }

  update(id:number, valor:UpdateUActIMC){
    return this.uActImcRepository.update(id, valor);
  }

  remove(id: number) {
    return 'This action removes a #${id} usuarioActImc';
  }
}
