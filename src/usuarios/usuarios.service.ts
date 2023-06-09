import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import { UpDateIMCDto } from './dto/updateIMC.dto';
import { actualizarDatosDto } from './dto/actualizarDatos.dto';
import { UpDateEstresDto } from './dto/updateEstres.dto';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  findByCorreo(correo: string) {
    return this.usuarioRepository.findOne({
      where: {
        correo_usuario: correo,
      },
    });
  }

  async create(createUsuarioDto: CreateUsuarioDto) {
    const usuario = await this.findByCorreo(createUsuarioDto.correo_usuario);
    if (usuario) {
      throw new NotFoundException('Elemento duplicado');
    }
    const user = new Usuario();
    user.apellidos_usuario = createUsuarioDto.apellidos_usuario;
    user.contraseña_usuario = createUsuarioDto.contraseña_usuario;
    user.correo_usuario = createUsuarioDto.correo_usuario;
    user.edad_usuario = createUsuarioDto.edad_usuario;
    user.estatura = createUsuarioDto.estatura;
    user.IMC_usuario = createUsuarioDto.IMC_usuario;
    user.nombre_usuario = createUsuarioDto.nombre_usuario;
    user.peso = createUsuarioDto.peso;
    user.sexo_usuario = createUsuarioDto.sexo_usuario;
    return await this.usuarioRepository.save(user);
  }

  findAll() {
    return this.usuarioRepository.find();
  }

  findOne(id: number) {
    return this.usuarioRepository.findOne({ where: { id_usuario: id } });
  }

  async updateIMC(correo: string, valor: UpDateIMCDto) {
    let buscar = await this.usuarioRepository.findOne({
      where: { correo_usuario: correo },
    });
    return this.usuarioRepository.update(buscar.id_usuario, valor);
  }


  async updateEstres(correo: string, valor: UpDateEstresDto) {
    let buscar = await this.usuarioRepository.findOne({
      where: { correo_usuario: correo },
    });
    return this.usuarioRepository.update(buscar.id_usuario, valor);
  }
  async ActualizarDatos(correo: string, actualizarDatos: actualizarDatosDto) {
    let buscar = await this.usuarioRepository.findOne({
      where: { correo_usuario: correo },
    });
    return this.usuarioRepository.update(buscar.id_usuario, actualizarDatos);
  }

  async Login(cuenta: string) {
    const array = cuenta.split(',');
    const correo = array[0];
    const contraseña = array[1];
  
    const buscar = await this.usuarioRepository.findOne({
      where: {
        correo_usuario: correo,
        contraseña_usuario: contraseña,
      },
    });
  
    if (!buscar) {
      throw new UnauthorizedException('Denegado');
    } else {
      const response = {
        correo_usuario: buscar.correo_usuario,
        imc: buscar.IMC_usuario,
        nivel_estres: buscar.nivelEstres_usuario
      };
      return response;
    }
  }

  remove(id: number) {
    return this.usuarioRepository.delete(id);
  }
}
