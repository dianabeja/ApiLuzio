import { Test, TestingModule } from '@nestjs/testing';
import { ActNivelEstresService } from './act_nivel-estres.service';

describe('ActNivelEstresService', () => {
  let service: ActNivelEstresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActNivelEstresService],
    }).compile();

    service = module.get<ActNivelEstresService>(ActNivelEstresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
