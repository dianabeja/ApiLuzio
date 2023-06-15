import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComentariosService } from './comentarios.service';
import { CreateComentarioDto } from './dto/create-comentario.dto';
import { Comentario } from './entities/comentario.entity';
import { ComentariosFactory } from 'src/Fabrica/Entidades/cometarios.factory';

@Controller('comentarios')
export class ComentariosController {
  constructor(
    private readonly comentariosService: ComentariosService,
    private comentariosFactory: ComentariosFactory) {}

  @Post()
  create(@Body() createComentarioDto: CreateComentarioDto) {
    return this.comentariosFactory.create(createComentarioDto);
  }

  @Get()
  findAll() {
    return this.comentariosService.findAll();
  }
  @Get('/5')
  find5() {
    return this.comentariosService.find5();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comentariosService.findOne(+id);
  }

  @Get('/id_cuenta/:id')
  findByIdCuenta(@Param('id') id: string) {
    return this.comentariosService.findByIdCuenta(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comentariosService.remove(+id);
  }
}
