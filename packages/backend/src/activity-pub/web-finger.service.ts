import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { plainToInstance } from "class-transformer";
import { WebfingerDto } from "./dto/webfinger.dto";

@Injectable()
export class WebFingerService {
  constructor(private configService: ConfigService) {}
  public async getAccount(resource: string) {
    const [userName, host] = resource.split("@");
    //TODO: use UserRepository to fetch userdata from Database
    const userLink = `${
      this.configService.get<string>("HOST")
    }/users/${userName}`;
    const response = {
      subject: `acct:${userName}@${host}`,
      aliases: [
        userLink,
      ],
      links: [
        {
          rel: "http://webfinger.net/rel/profile-page",
          type: "text/html",
          href: userLink,
        },
        {
          rel: "self",
          type: "application/activity+json",
          href: userLink,
        },
      ],
    };
    return plainToInstance(WebfingerDto, response);
  }
}
