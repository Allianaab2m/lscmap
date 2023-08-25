import { Test, TestingModule } from "@nestjs/testing";
import { WebFingerController } from "./web-finger.controller";
import { WebFingerService } from "./web-finger.service";
import { ConfigService } from "@nestjs/config";

describe("WebFingerController", () => {
  let controller: WebFingerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WebFingerService, ConfigService],
      controllers: [WebFingerController],
    }).compile();

    controller = module.get<WebFingerController>(WebFingerController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
