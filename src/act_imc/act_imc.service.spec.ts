import { Test, TestingModule } from '@nestjs/testing';
import { ActImcService } from './act_imc.service';

describe('ActImcService', () => {
  let service: ActImcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActImcService],
    }).compile();

    service = module.get<ActImcService>(ActImcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
