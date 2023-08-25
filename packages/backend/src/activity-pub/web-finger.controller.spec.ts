import { Test, TestingModule } from '@nestjs/testing';
import { WebFingerController } from './web-finger.controller';

describe('WebFingerController', () => {
  let controller: WebFingerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WebFingerController],
    }).compile();

    controller = module.get<WebFingerController>(WebFingerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
