import { BaseFactory } from '../Factory.class';
import { Connection} from 'typeorm';
import { Injectable } from '@nestjs/common';
import { UsuarioActEstres } from 'src/usuario-act-estres/entities/usuario-act-estres.entity'; 

@Injectable()
export class UsuarioActEstresFactory extends BaseFactory<UsuarioActEstres>{
constructor(connection:Connection) {
    super(connection);
    this.repository=connection.getRepository(UsuarioActEstres);
}
}