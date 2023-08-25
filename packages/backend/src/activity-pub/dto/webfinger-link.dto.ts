import { Expose, Transform } from "class-transformer";

const sslToPlain = ({ value }: { value: string | string[] }) => {
  if (Array.isArray(value)) {
    return value.map((val) => sslToPlain({ value: val }));
  }
  if (value.startsWith("https://")) {
    return "http" + value.substring(5);
  }
  return value;
};

export class WebfingerLinkDto {
  @Expose()
  public rel!: string;

  @Expose()
  public type!: string;

  @Expose()
  @Transform(sslToPlain, { groups: ["sslToPlain"] })
  public href!: string;
}
