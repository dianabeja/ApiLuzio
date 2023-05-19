import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ActImcService } from './act_imc.service';
import { CreateActImcDto } from './dto/create-act_imc.dto';
import { ActImcFactory } from 'src/Fabrica/Entidades/act_IMC.factory';

@Controller('act-imc')
export class ActImcController {
  constructor(
    private readonly actImcService: ActImcService,
    private actImcFactory: ActImcFactory) {}

  @Post()
  create(@Body() createActImcDto: CreateActImcDto) {
    return this.actImcFactory.create(createActImcDto);
  }

  @Get()
  findAll() {
    return this.actImcService.findAll();
  }

  @Get('/act/:actividades')
  Actividades(@Param('actividades') actividades: string){
    return this.actImcService.Actividades(actividades);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.actImcService.findOne(+id);
  }

  @Get('/tipo/:tipo')
  findByTipo(@Param('tipo') tipo:string){
    return this.actImcService.findByTipo(tipo);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.actImcService.remove(+id);
  }
}
