import { Test, TestingModule } from '@nestjs/testing';
import { QqferiasController } from './qqferias.controller';

describe('QqferiasController', () => {
  let controller: QqferiasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QqferiasController],
    }).compile();

    controller = module.get<QqferiasController>(QqferiasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});