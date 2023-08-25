import { Test, TestingModule } from '@nestjs/testing';
import { WebFingerService } from './web-finger.service';

describe('WebFingerService', () => {
  let service: WebFingerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WebFingerService],
    }).compile();

    service = module.get<WebFingerService>(WebFingerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
