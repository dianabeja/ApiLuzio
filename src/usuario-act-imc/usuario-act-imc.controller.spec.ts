import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioActImcController } from './usuario-act-imc.controller';
import { UsuarioActImcService } from './usuario-act-imc.service';

describe('UsuarioActImcController', () => {
  let controller: UsuarioActImcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuarioActImcController],
      providers: [UsuarioActImcService],
    }).compile();

    controller = module.get<UsuarioActImcController>(UsuarioActImcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
