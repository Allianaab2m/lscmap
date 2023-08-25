import { Controller, Get, Header } from "@nestjs/common";
import { HostMetaService } from "./host-meta.service";

@Controller(".well-known/host-meta")
export class HostMetaController {
  constructor(private hostMetaService: HostMetaService) {}

  @Get()
  @Header("Content-Type", "application/xrd+xml")
  async getHostMeta() {
    return await this.hostMetaService.getHostMeta();
  }
}
