import { Test, TestingModule } from '@nestjs/testing';
import { QQFeriasService } from './qqferias.service';

describe('QqferiasService', () => {
  let service: QQFeriasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QQFeriasService],
    }).compile();

    service = module.get<QQFeriasService>(QQFeriasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});