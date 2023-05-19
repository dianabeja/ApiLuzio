import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuarioActEstresService } from './usuario-act-estres.service';
import { CreateUsuarioActEstreDto } from './dto/create-usuario-act-estres.dto';
import { UpdateUActEstres } from './dto/update-uActEstres.dto';
import { UsuarioActEstresFactory } from 'src/Fabrica/Entidades/usuario_Act_Estres.factory';

@Controller('usuario-act-estres')
export class UsuarioActEstresController {
  constructor(
    private readonly usuarioActEstresService: UsuarioActEstresService,
    private usuarioActEstresFactory: UsuarioActEstresFactory,
    ) {}

  @Post()
  create(@Body() createUsuarioActEstreDto: CreateUsuarioActEstreDto) {
    return this.usuarioActEstresFactory.create(createUsuarioActEstreDto);
  }

  @Get()
  findAll() {
    return this.usuarioActEstresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioActEstresService.findOne(+id);
  }

  @Get('/id_usuario/:usuario')
  findByUsuario(@Param('usuario') usuario:number){
    return this.usuarioActEstresService.findByUsuario(+usuario);
  }

  @Get('/id_act/:id_act')
  findByAct(@Param('id_act') id_act:number){
    return this.usuarioActEstresService.findByAct(+id_act);
  }

  @Patch('/id/:id')
   async update(@Param('id') id:number, @Body() update:UpdateUActEstres){
    return this.usuarioActEstresService.update(+id, update);
   }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioActEstresService.remove(+id);
  }
}
