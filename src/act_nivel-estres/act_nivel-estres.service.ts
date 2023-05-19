import { Injectable } from '@nestjs/common';
import { CreateActNivelEstresDto } from './dto/create-act_nivel-estres.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActNivelEstres } from './entities/act_nivel-estres.entity';

@Injectable()
export class ActNivelEstresService {
  constructor(
    @InjectRepository(ActNivelEstres)
    private readonly actNivelEstresRepository: Repository<ActNivelEstres>
  ) {}

  async create(createActNivelEstreDto: CreateActNivelEstresDto):Promise<ActNivelEstres> {
    const actNE =new ActNivelEstres();
    actNE.descripcion_actNivelEstres=createActNivelEstreDto.descripcion_actNivelEstres;
    actNE.imagen_actNivelEstres=createActNivelEstreDto.imagen_actNivelEstres;
    actNE.nivel_estres=createActNivelEstreDto.nivel_estres;
    actNE.nombre_actNivelEstres=createActNivelEstreDto.nombre_actNivelEstres;
    return await this.actNivelEstresRepository.save(actNE);
  }

  findAll() {
    return this.actNivelEstresRepository.find();
  }

  findOne(id: number) {
    return this.actNivelEstresRepository.findOneById(id);
  }

  async Actividades( nivel: string){
    let Actividad1:any;
    let Actividad2:any;
    let Actividad3:any;
    let Actividad4:any;
    let contador=1;

    let act= await this.actNivelEstresRepository.find({where: {nivel_estres: nivel}})
    let numero: number = ((Math.random() * act.length));

    while (contador<=4){

      if (contador=1) {
        Actividad1 = act[numero.toFixed()]
        numero = ((Math.random() * act.length));
        contador+=1;
      }

      if (contador=2) {
        Actividad2 = act[numero.toFixed()]
        numero = ((Math.random() * act.length));
        contador+=1;
      }

      if (contador=3) {
        Actividad3 = act[numero.toFixed()]
        numero = ((Math.random() * act.length));
        contador+=1;
      }
      if (contador=4) {
        Actividad4 = act[numero.toFixed()]
        numero = ((Math.random() * act.length));
        contador+=1;
      }
        
    }
    return {Actividad1, Actividad2, Actividad3, Actividad4}
  }

  remove(id: number) {
    return `This action removes a #${id} actNivelEstre`;
  }
}
