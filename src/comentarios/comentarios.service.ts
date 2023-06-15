import { Injectable } from '@nestjs/common';
import { CreateComentarioDto } from './dto/create-comentario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Comentario } from './entities/comentario.entity';
import { Repository } from 'typeorm';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

@Injectable()
export class ComentariosService {
  constructor(
    @InjectRepository(Comentario)
    private readonly comentarioReposotory: Repository<Comentario>,
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>
  ){}

  async create(createComentarioDto: CreateComentarioDto) {
    const usuario=await this.usuarioRepository.findOne({where: {correo_usuario: createComentarioDto.cuenta}})
    
    if(!usuario){
      return 'La cuenta no existe';
    }
      const comentario=new Comentario();
      comentario.texto_comentario=createComentarioDto.texto_comentario;
      comentario.cuenta=createComentarioDto.cuenta;
      comentario.tipoModulo=createComentarioDto.tipoModulo;

    return await this.comentarioReposotory.save(comentario);
  }

  findAll() {
    return this.comentarioReposotory.find();
  }

  async find5(){
    return await this.comentarioReposotory.find({
      order: { id_comentario:'DESC' },
      take: 5
    }

    )
  }

  findOne(id: number) {
    return this.comentarioReposotory.findOneById(id);
  }

  findByIdCuenta(usuario:string) {
    return this.comentarioReposotory.find({
      where: {
        cuenta: usuario,
      }
    })
  }

  remove(id: number) {
    return this.comentarioReposotory.delete(id);
  }
}
