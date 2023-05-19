import { BaseFactory } from '../Factory.class';
import { Connection } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { UsuarioActImc } from 'src/usuario-act-imc/entities/usuario-act-imc.entity';

@Injectable()
export class UsuarioActImcFactory extends BaseFactory<UsuarioActImc>{
    constructor( connection: Connection){
        super (connection);
        this.repository= connection.getRepository(UsuarioActImc);
    }
}