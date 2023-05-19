import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActNivelEstresService } from './act_nivel-estres.service';
import { CreateActNivelEstresDto } from './dto/create-act_nivel-estres.dto';
import { ActEstresFactory } from 'src/Fabrica/Entidades/act_NivelEstres.factory';

@Controller('act-nivel-estres')
export class ActNivelEstresController {
  constructor(
    private readonly actNivelEstresService: ActNivelEstresService,
    private actEstresFactory: ActEstresFactory) {}

  @Post()
  create(@Body() createActNivelEstresDto: CreateActNivelEstresDto) {
    return this.actEstresFactory.create(createActNivelEstresDto);
  }

  @Get()
  findAll() {
    return this.actNivelEstresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.actNivelEstresService.findOne(+id);
  }

  @Get('/act/:nivel')
  Actividades(@Param('nivel') nivel: string){
    return this.actNivelEstresService.Actividades(nivel);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.actNivelEstresService.remove(+id);
  }
}
