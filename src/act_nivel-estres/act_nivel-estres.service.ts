import { Injectable } from '@nestjs/common';
import { CreateActNivelEstresDto } from './dto/create-act_nivel-estres.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActNivelEstres } from './entities/act_nivel-estres.entity';

@Injectable()
export class ActNivelEstresService {
  constructor(
    @InjectRepository(ActNivelEstres)
    private readonly actNivelEstresRepository: Repository<ActNivelEstres>,
  ) {}

  async create(
    createActNivelEstreDto: CreateActNivelEstresDto,
  ): Promise<ActNivelEstres> {
    const actNE = new ActNivelEstres();
    actNE.descripcion_actNivelEstres =
      createActNivelEstreDto.descripcion_actNivelEstres;
    actNE.imagen_actNivelEstres = createActNivelEstreDto.imagen_actNivelEstres;
    actNE.nivel_estres = createActNivelEstreDto.nivel_estres;
    actNE.nombre_actNivelEstres = createActNivelEstreDto.nombre_actNivelEstres;
    return await this.actNivelEstresRepository.save(actNE);
  }

  findAll() {
    return this.actNivelEstresRepository.find();
  }

  findOne(id: number) {
    return this.actNivelEstresRepository.findOneById(id);
  }

  async Actividades(nivel: string) {
    let Actividad1: any;
    let Actividad2: any;
    let Actividad3: any;
    let Actividad4: any;

    let act = await this.actNivelEstresRepository.find({
      where: { nivel_estres: nivel },
    });

    while (!Actividad1 || !Actividad2 || !Actividad3 || !Actividad4) {
      let numero: number = Math.floor(Math.random() * act.length);
      let actividad = act[numero.toFixed()];
      if (!Actividad1) {
        Actividad1 = actividad;
      } else if (!Actividad2 && actividad !== Actividad1) {
        Actividad2 = actividad;
      } else if (
        !Actividad3 &&
        actividad !== Actividad1 &&
        actividad !== Actividad2
      ) {
        Actividad3 = actividad;
      } else if (
        !Actividad4 &&
        actividad !== Actividad1 &&
        actividad !== Actividad2 &&
        actividad !== Actividad3
      ) {
        Actividad4 = actividad;
      }
    }

    let arreglo: any = [Actividad1, Actividad2, Actividad3, Actividad4];
    return arreglo;
  }

  remove(id: number) {
    return `This action removes a #${id} actNivelEstre`;
  }
}
