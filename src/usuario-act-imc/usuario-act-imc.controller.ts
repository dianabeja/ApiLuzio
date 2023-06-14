import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuarioActImcService } from './usuario-act-imc.service';
import { CreateUsuarioActImcDto } from './dto/create-usuario-act-imc.dto';
import { UpdateUActIMC } from './dto/updateuActIMC.dto';
import { UsuarioActImcFactory } from 'src/Fabrica/Entidades/usuario_Act_IMC.factory'; 

@Controller('usuario-act-imc')
export class UsuarioActImcController {
  constructor(
    private usuarioActImcService: UsuarioActImcService,
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
  findByUsuario(@Param('usuario') usuario:string){
    return this.usuarioActImcService.findByUsuario(usuario);
  }

  @Get('/activi/:usuario')
  findActividades(@Param('usuario') usuario:string){
    return this.usuarioActImcService.findActividades(usuario);
  }

  @Patch('/update/:id')
  async update(@Param('id') id:string, @Body() update:boolean){
   return this.usuarioActImcService.update(id, update);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioActImcService.remove(+id);
  }

  @Post('/asignarAct/:datos')
  crearTodasAct(@Param('datos') datos: string){
    return this.usuarioActImcService.crearTodasAct(datos)
  }
}
