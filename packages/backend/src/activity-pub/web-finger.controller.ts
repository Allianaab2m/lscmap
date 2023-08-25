import { Controller, Get, Header, Query } from "@nestjs/common";
import { WebFingerService } from "./web-finger.service";

@Controller(".well-known/webfinger")
export class WebFingerController {
  constructor(private webfingerService: WebFingerService) {}

  @Get()
  @Header("Content-Type", "application/jrd+json")
  public async webfinger(@Query("resource") resource: string) {
    return await this.webfingerService.getAccount(resource);
  }
}
