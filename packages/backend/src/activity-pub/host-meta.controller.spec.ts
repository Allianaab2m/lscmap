import { Test, TestingModule } from "@nestjs/testing";
import { HostMetaController } from "./host-meta.controller";
import { HostMetaService } from "./host-meta.service";
import { ConfigService } from "@nestjs/config";

describe("HostMetaController", () => {
  let controller: HostMetaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HostMetaService, ConfigService],
      controllers: [HostMetaController],
    }).compile();

    controller = module.get<HostMetaController>(HostMetaController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
