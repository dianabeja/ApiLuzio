import { BaseFactory } from '../Factory.class';
import { Connection, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { ActImc } from 'src/act_imc/entities/act_imc.entity';

@Injectable()
export class ActImcFactory extends BaseFactory<ActImc>{
    constructor(connection: Connection) {
        super(connection);
        this.repository= connection.getRepository(ActImc);
    }
}