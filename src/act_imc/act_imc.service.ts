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

    let numero:number = ((Math.random() * act.length));

    while (contador<=3){

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
        
    }
    return {Actividad1, Actividad2, Actividad3}
  }

  remove(id: number) {
    return `This action removes a #${id} actImc`;
  }
}
