import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioActImcService } from './usuario-act-imc.service';

describe('UsuarioActImcService', () => {
  let service: UsuarioActImcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsuarioActImcService],
    }).compile();

    service = module.get<UsuarioActImcService>(UsuarioActImcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
