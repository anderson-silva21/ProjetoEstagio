import { Test, TestingModule } from '@nestjs/testing';
import { QQFeriasController } from './qqferias.controller';

describe('QqferiasController', () => {
  let controller: QQFeriasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QQFeriasController],
    }).compile();

    controller = module.get<QQFeriasController>(QQFeriasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});