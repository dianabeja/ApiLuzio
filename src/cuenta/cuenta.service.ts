import { Injectable } from '@nestjs/common';
import { CreateCuentaDto } from './dto/create-cuenta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cuenta } from './entities/cuenta.entity';
import { Repository } from 'typeorm';
import { Usuario } from 'src/usuarios/entities/usuario.entity';


@Injectable()
export class CuentaService {
  constructor(
    @InjectRepository(Cuenta)
    private readonly cuentaRepository: Repository<Cuenta>,
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>
  ){}

  async create(createCuentaDto: CreateCuentaDto){
    const usuario=await this.usuarioRepository.findOneById(
      createCuentaDto.usuario,
    );

    if(!usuario){
      return `El usuario no existe :c`;
    }

    const cuenta=new Cuenta();
    cuenta.fechaIngreso_cuenta=createCuentaDto.fechaIngreso_cuenta;
    cuenta.usuario=createCuentaDto.usuario;
    return await this.cuentaRepository.save(cuenta);
  }

  findAll() {
    return this.cuentaRepository.find();
  }

  findOne(id: number) {
    return this.cuentaRepository.findOneById(id);
  }

  remove(id: number) {
    return `This action removes a #${id} cuenta`;
  }
}
