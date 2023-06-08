import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { CreateActImcDto } from './dto/create-act_imc.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActImc } from './entities/act_imc.entity';
import { UsuarioActImc } from 'src/usuario-act-imc/entities/usuario-act-imc.entity'; 
import { UsuarioActImcService } from 'src/usuario-act-imc/usuario-act-imc.service';

@Injectable()
export class ActImcService {
  constructor(
    @InjectRepository(ActImc)
    private readonly actImcRepository:Repository<ActImc>, 
    @Inject(forwardRef(() => UsuarioActImcService)) 
    private readonly usuarioAtIMCRepository: Repository<UsuarioActImc>
  ) {}

  async create(createActImcDto: CreateActImcDto) {
    const act=new ActImc();
    act.nombre_actIMC=createActImcDto.nombre_actIMC;
    act.descripcion_actIMC=createActImcDto.descripcion_actIMC;
    act.tipo_actIMC=createActImcDto.tipo_actIMC;
    act.nivel_IMC=createActImcDto.nivel_IMC;
    act.imagen_actIMC=createActImcDto.descripcion_actIMC;
    return await this.actImcRepository.save(act);
  }

  
  findAll() {
    return this.actImcRepository.find();
  }

  findOne(id: number) {
    return this.actImcRepository.findOne({where: {id_actIMC: id}})
  }

  findByTipo(tipo:string){
    return this.actImcRepository.find({
      where: {
        tipo_actIMC: tipo,
      }
    })
  }

  async Actividades(actividades: string){
    const array= actividades.split(',');
    const tipo= array[0]
    const nivel=array[1]
    let Actividad1:any;
    let Actividad2:any;
    let Actividad3:any;
    let contador=1;
    
    let act =  await this.actImcRepository.find({where:{tipo_actIMC: tipo, nivel_IMC: nivel}})

    while (!Actividad1 || !Actividad2 || !Actividad3) {
      let numero: number = Math.floor(Math.random() * act.length);
      let actividad = act[numero.toFixed()];
  
      if (!Actividad1) {
        Actividad1 = actividad;
      } else if (!Actividad2 && actividad !== Actividad1) {
        Actividad2 = actividad;
      } else if (!Actividad3 && actividad !== Actividad1 && actividad !== Actividad2) {
        Actividad3 = actividad;
      }
    }
    let arreglo: any = [Actividad1, Actividad2, Actividad3];

    return arreglo;

}

async Actividad(actividades: string){
  const array= actividades.split(',');
  const tipo= array[0]
  const nivel=array[1]
  let Actividad:any;
  
  let act =  await this.actImcRepository.find({where:{tipo_actIMC: tipo, nivel_IMC: nivel}})

  let numero:number = ((Math.random() * act.length));

      Actividad = act[numero.toFixed()]

  return Actividad;
}

  remove(id: number) {
    return `This action removes a #${id} actImc`;
  }
}
