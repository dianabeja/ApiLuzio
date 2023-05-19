import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CuentaService } from './cuenta.service';
import { CreateCuentaDto } from './dto/create-cuenta.dto';
import { CuentasFactory } from 'src/Fabrica/Entidades/cuentas.factory';

@Controller('cuenta')
export class CuentaController {
  constructor(
    private readonly cuentaService: CuentaService, 
    private cuentasFactory: CuentasFactory,) {}

  @Post()
  create(@Body() createCuentaDto: CreateCuentaDto) {
    return this.cuentaService.create(createCuentaDto);
  }

  @Get()
  findAll() {
    return this.cuentaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cuentaService.findOne(+id);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cuentaService.remove(+id);
  }
}
