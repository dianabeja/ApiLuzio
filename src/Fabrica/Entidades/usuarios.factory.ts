import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { BaseFactory } from '../Factory.class';
import { Connection, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuarioFactory extends BaseFactory<Usuario> {
  constructor(connection: Connection) {
    super(connection);
    this.repository = connection.getRepository(Usuario);
  }
}
