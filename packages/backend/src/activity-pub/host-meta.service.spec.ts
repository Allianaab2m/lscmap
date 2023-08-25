import { Test, TestingModule } from "@nestjs/testing";
import { HostMetaService } from "./host-meta.service";
import { ConfigService } from "@nestjs/config";

describe("HostMetaService", () => {
  let service: HostMetaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HostMetaService, ConfigService],
    }).compile();

    service = module.get<HostMetaService>(HostMetaService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
