import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { UpDateIMCDto } from './dto/updateIMC.dto';
import { UsuarioFactory } from 'src/Fabrica/Entidades/usuarios.factory';
import { actualizarDatosDto } from './dto/actualizarDatos.dto';
import { UpDateEstresDto } from './dto/updateEstres.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(
    private readonly usuariosService: UsuariosService,
    private usuarioFactory: UsuarioFactory,
  ) {}

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioFactory.create(createUsuarioDto);
  }

  @Get()
  findAll() {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.usuariosService.findOne(+id);
  }

  @Get('/correo/:correo')
  findByCorreo(@Param('correo') correo: string) {
    return this.usuariosService.findByCorreo(correo);
  }

  @Patch('/IMC/:id')
  async updateIMC(@Param('id') id: string, @Body() update: UpDateIMCDto) {
    return this.usuariosService.updateIMC(id, update);
  }
  @Patch('/Estres/:id')
  async updateEstres(@Param('id') id: string, @Body() update: UpDateEstresDto) {
    return this.usuariosService.updateEstres(id, update);
  }

  @Patch('/Datos/:id')
  async ActualizarDatos(@Param('id') id: string, @Body() actualizarDatos: actualizarDatosDto) {
    return this.usuariosService.ActualizarDatos(id, actualizarDatos);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usuariosService.remove(+id);
  }



  @Get('/login/:cuenta')
  Login(@Param('cuenta') cuenta: string) {
    return this.usuariosService.Login(cuenta);
  }

}

