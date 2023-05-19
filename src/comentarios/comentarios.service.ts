import { Injectable } from '@nestjs/common';
import { CreateComentarioDto } from './dto/create-comentario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Comentario } from './entities/comentario.entity';
import { Repository } from 'typeorm';
import { Cuenta } from 'src/cuenta/entities/cuenta.entity';

@Injectable()
export class ComentariosService {
  constructor(
    @InjectRepository(Comentario)
    private readonly comentarioReposotory: Repository<Comentario>,
    @InjectRepository(Cuenta)
    private readonly cuentaRepository: Repository<Cuenta>
  ){}

  async create(createComentarioDto: CreateComentarioDto) {
    const cuenta=await this.cuentaRepository.findOneById(
      createComentarioDto.cuenta,
    );
    
    if(!cuenta){
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

  findByIdCuenta(cuenta:number) {
    return this.comentarioReposotory.find({
      where: {
        cuenta: cuenta,
      }
    })
  }

  remove(id: number) {
    return this.comentarioReposotory.delete(id);
  }
}
