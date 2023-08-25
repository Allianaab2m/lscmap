import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class HostMetaService {
  constructor(private configService: ConfigService) {}
  async getHostMeta() {
    return `<?xml version="1.0" encoding="UTF-8"?>
<XRD xmlns="https://docs.oasis-open.org/ns/xri/xrd-1.0">
  <Link rel="lrdd" template=${
      this.configService.get<string>("HOST")
    }/.well-known/webfinger?resource={uri}"/>
</XRD>`;
  }
}
