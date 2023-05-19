import { BaseFactory } from '../Factory.class';
import { Connection, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { ActNivelEstres } from 'src/act_nivel-estres/entities/act_nivel-estres.entity';

@Injectable()
export class ActEstresFactory extends BaseFactory<ActNivelEstres>{
    constructor(connection: Connection){
        super(connection);
        this.repository=connection.getRepository(ActNivelEstres);
    }
}