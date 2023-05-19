import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioActEstresController } from './usuario-act-estres.controller';
import { UsuarioActEstresService } from './usuario-act-estres.service';

describe('UsuarioActEstresController', () => {
  let controller: UsuarioActEstresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuarioActEstresController],
      providers: [UsuarioActEstresService],
    }).compile();

    controller = module.get<UsuarioActEstresController>(UsuarioActEstresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
