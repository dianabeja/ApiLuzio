import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { CreateActImcDto } from './dto/create-act_imc.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActImc } from './entities/act_imc.entity';
import { UsuarioActImcService } from 'src/usuario-act-imc/usuario-act-imc.service';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

@Injectable()
export class ActImcService {
  constructor(
    @InjectRepository(ActImc)
    private readonly actImcRepository: Repository<ActImc>,
    @Inject(forwardRef(() => UsuarioActImcService))
    private usuarioAtIMCRepository: UsuarioActImcService,
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async create(createActImcDto: CreateActImcDto) {
    const act = new ActImc();
    act.nombre_actIMC = createActImcDto.nombre_actIMC;
    act.descripcion_actIMC = createActImcDto.descripcion_actIMC;
    act.tipo_actIMC = createActImcDto.tipo_actIMC;
    act.nivel_IMC = createActImcDto.nivel_IMC;
    act.imagen_actIMC = createActImcDto.descripcion_actIMC;
    return await this.actImcRepository.save(act);
  }

  findAll() {
    return this.actImcRepository.find();
  }

  findOne(id: number) {
    return this.actImcRepository.findOne({ where: { id_actIMC: id } });
  }
  async findTipoNivel(tipo: string, nivel:string){
    return await this.actImcRepository.find({
      where: {
        tipo_actIMC: tipo, nivel_IMC: nivel
      },
    });
  }

  findByTipo(tipo: string) {
    return this.actImcRepository.find({
      where: {
        tipo_actIMC: tipo,
      },
    });
  }

  async Actividades(actividades: string) {
    
    const array = actividades.split(',');
    const tipo = array[0];
    const usuario = array[1];
    let Actividad1: any;
    let Actividad2: any;
    let Actividad3: any;

    const buscar = await this.usuarioRepository.findOne({where:{correo_usuario: usuario}})

    let todasAct = await this.actImcRepository.find({
      where: { tipo_actIMC: tipo, nivel_IMC: buscar.IMC_usuario },
    });
    let idTodasAct = todasAct.map((id) => id.id_actIMC);

    let actUsuarios: Array<any> =
      await this.usuarioAtIMCRepository.findActividades(usuario);

    let actUsuario = idTodasAct.filter((id) => actUsuarios.includes(id));

    let actividadesSeleccionadas = new Set<number>();

    if (actUsuario.length >= 4) {
    while (!Actividad1 || !Actividad2 || !Actividad3) {
      let numero: number = Math.floor(Math.random() * actUsuario.length);

      let actividad = actUsuario[numero.toFixed()];

      let actividad1: any = await this.findOne(actividad);
      let actividadid = actividad1.id_actIMC;

      if (!Actividad1 && !actividadesSeleccionadas.has(actividadid)) {
        Actividad1 = actividad1;
        actividadesSeleccionadas.add(actividadid);
      } else if ( !Actividad2 && actividad1 !== Actividad1 &&
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
      }
    }
    let arreglo: any = [Actividad1, Actividad2, Actividad3];
    return arreglo;
  } else {
    let arreglo: any[] = [];

    for (let i = 0; i < actUsuario.length; i++) {
      let numero: number = actUsuario[i];
      let acti: any = await this.actImcRepository.find({
        where: { tipo_actIMC:tipo ,nivel_IMC: buscar.IMC_usuario, id_actIMC: numero }
      });
      arreglo.push(acti);
    }
    
    return arreglo;
  }
  }

  async Actividad(actividades: string) {
    const array = actividades.split(',');
    const tipo = array[0];
    const nivel = array[1];
    let Actividad: any;

    let act = await this.actImcRepository.find({
      where: { tipo_actIMC: tipo, nivel_IMC: nivel },
    });

    let numero: number = Math.random() * act.length;

    Actividad = act[numero.toFixed()];

    return Actividad;
  }

  remove(id: number) {
    return `This action removes a #${id} actImc`;
  }
}
