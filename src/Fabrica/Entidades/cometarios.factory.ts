import { Comentario } from 'src/comentarios/entities/comentario.entity';
import { BaseFactory } from '../Factory.class';
import { Connection, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ComentariosFactory extends BaseFactory<Comentario>{
    constructor(connection:Connection){
        super(connection);
        this.repository=connection.getRepository(Comentario);
    }
}