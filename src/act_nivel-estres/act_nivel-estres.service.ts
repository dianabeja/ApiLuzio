import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { CreateActNivelEstresDto } from './dto/create-act_nivel-estres.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActNivelEstres } from './entities/act_nivel-estres.entity';
import { UsuarioActEstresService } from 'src/usuario-act-estres/usuario-act-estres.service';

@Injectable()
export class ActNivelEstresService {
  constructor(
    @InjectRepository(ActNivelEstres)
    private readonly actNivelEstresRepository: Repository<ActNivelEstres>,
    @Inject(forwardRef(() => UsuarioActEstresService))
    private usuarioAtEstresRepository: UsuarioActEstresService,
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

  async Actividades(actividades: string) {
    const array = actividades.split(',');
    const nivel = array[0];
    const usuario = array[1];
    let Actividad1: any;
    let Actividad2: any;
    let Actividad3: any;
    let Actividad4: any;

    let todasAct = await this.actNivelEstresRepository.find({
      where: { nivel_estres: nivel },
    });

    let idTodasAct = todasAct.map((id) => id.id_actNivelEstres);

    let actUsuarios: Array<any> =
      await this.usuarioAtEstresRepository.findActividades(usuario);

    let actUsuario = idTodasAct.filter((id) => actUsuarios.includes(id));

    let actividadesSeleccionadas = new Set<number>();

    if (actUsuario.length >= 4) {
      while (!Actividad1 || !Actividad2 || !Actividad3 || !Actividad4) {
        let numero: number = Math.floor(Math.random() * actUsuario.length);
        let actividad = actUsuario[numero.toFixed()];

        let actividad1: any = await this.findOne(actividad);
        let actividadid = actividad1.id_actNivelEstres;

        if (!Actividad1 && !actividadesSeleccionadas.has(actividadid)) {
          Actividad1 = actividad1;
          actividadesSeleccionadas.add(actividadid);
        } else if (
          !Actividad2 &&
          actividad1 !== Actividad1 &&
          !actividadesSeleccionadas.has(actividadid)
        ) {
          Actividad2 = actividad1;
          actividadesSeleccionadas.add(actividadid);
        } else if (
          !Actividad3 &&
          actividad1 !== Actividad1 &&
          actividad1 !== Actividad2 &&
          !actividadesSeleccionadas.has(actividadid)
        ) {
          Actividad3 = actividad1;
          actividadesSeleccionadas.add(actividadid);
        } else if (
          !Actividad4 &&
          actividad1 !== Actividad1 &&
          actividad1 !== Actividad2 &&
          actividad1 !== Actividad3 &&
          !actividadesSeleccionadas.has(actividadid)
        ) {
          Actividad4 = actividad1;
          actividadesSeleccionadas.add(actividadid);
        }
      }

      let arreglo: any = [Actividad1, Actividad2, Actividad3, Actividad4];
      return arreglo;
    } else {
      let arreglo: any[] = [];

      for (let i = 0; i < actUsuario.length; i++) {
        let numero: number = actUsuario[i];
        let acti: any = await this.actNivelEstresRepository.find({
          where: { nivel_estres: nivel, id_actNivelEstres: numero }
        });
        arreglo.push(acti);
      }
      
      return arreglo;
    }
  }

  remove(id: number) {
    return `This action removes a #${id} actNivelEstre`;
  }
}
