import { Test, TestingModule } from '@nestjs/testing';
import { QqferiasService } from './qqferias.service';

describe('QqferiasService', () => {
  let service: QqferiasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QqferiasService],
    }).compile();

    service = module.get<QqferiasService>(QqferiasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});