import { Test, TestingModule } from '@nestjs/testing';
import { ActImcController } from './act_imc.controller';
import { ActImcService } from './act_imc.service';

describe('ActImcController', () => {
  let controller: ActImcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActImcController],
      providers: [ActImcService],
    }).compile();

    controller = module.get<ActImcController>(ActImcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
