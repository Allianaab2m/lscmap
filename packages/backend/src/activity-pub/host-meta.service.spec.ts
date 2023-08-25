import { Test, TestingModule } from '@nestjs/testing';
import { HostMetaService } from './host-meta.service';

describe('HostMetaService', () => {
  let service: HostMetaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HostMetaService],
    }).compile();

    service = module.get<HostMetaService>(HostMetaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
