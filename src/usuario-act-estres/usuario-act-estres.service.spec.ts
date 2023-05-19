import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioActEstresService } from './usuario-act-estres.service';

describe('UsuarioActEstresService', () => {
  let service: UsuarioActEstresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsuarioActEstresService],
    }).compile();

    service = module.get<UsuarioActEstresService>(UsuarioActEstresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
