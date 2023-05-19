import { Test, TestingModule } from '@nestjs/testing';
import { ActNivelEstresController } from './act_nivel-estres.controller';
import { ActNivelEstresService } from './act_nivel-estres.service';

describe('ActNivelEstresController', () => {
  let controller: ActNivelEstresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActNivelEstresController],
      providers: [ActNivelEstresService],
    }).compile();

    controller = module.get<ActNivelEstresController>(ActNivelEstresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
