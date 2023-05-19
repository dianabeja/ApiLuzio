import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuarioActImcService } from './usuario-act-imc.service';
import { CreateUsuarioActImcDto } from './dto/create-usuario-act-imc.dto';
import { UpdateUActIMC } from './dto/updateuActIMC.dto';
import { UsuarioActImcFactory } from 'src/Fabrica/Entidades/usuario_Act_IMC.factory'; 

@Controller('usuario-act-imc')
export class UsuarioActImcController {
  constructor(
    private readonly usuarioActImcService: UsuarioActImcService,
    private usuarioActImcFactory: UsuarioActImcFactory) {}

  @Post()
  create(@Body() createUsuarioActImcDto: CreateUsuarioActImcDto) {
    return this.usuarioActImcFactory.create(createUsuarioActImcDto);
  }

  @Get()
  findAll() {
    return this.usuarioActImcService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioActImcService.findOne(+id);
  }

  @Get('/id_usuario/:usuario')
  findByUsuario(@Param('usuario') usuario:number){
    return this.usuarioActImcService.findByUsuario(+usuario);
  }

  @Patch('/id/:id')
  async update(@Param('id') id:number, @Body() update:UpdateUActIMC){
   return this.usuarioActImcService.update(+id, update);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioActImcService.remove(+id);
  }
}
