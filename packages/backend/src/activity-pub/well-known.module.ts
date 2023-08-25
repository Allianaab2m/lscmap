import { Module } from "@nestjs/common";
import { WebFingerService } from "./web-finger.service";
import { HostMetaService } from "./host-meta.service";
import { WebFingerController } from "./web-finger.controller";
import { HostMetaController } from "./host-meta.controller";

@Module({
  controllers: [HostMetaController, WebFingerController],
  providers: [WebFingerService, HostMetaService],
})
export class WellKnownModule {}
