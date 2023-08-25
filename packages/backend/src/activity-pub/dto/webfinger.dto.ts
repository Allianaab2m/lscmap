import { Expose, Transform, Type } from "class-transformer";
import { WebfingerLinkDto } from "./webfinger-link.dto";

const sslToPlain = ({ value }: { value: string | string[] }) => {
  if (Array.isArray(value)) {
    return value.map((val) => sslToPlain({ value: val }));
  }
  if (value.startsWith("https://")) {
    return "http" + value.substring(5);
  }
  return value;
};

export class WebfingerDto {
  @Expose()
  public subject!: string;

  @Expose()
  @Transform(sslToPlain, { groups: ["sslToPlain"] })
  public aliases!: string[];

  @Expose()
  @Type(() => WebfingerLinkDto)
  public links!: WebfingerLinkDto[];
}
