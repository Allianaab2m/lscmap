import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import configuration from "./config/configuration";
import { WellKnownModule } from "./activity-pub/well-known.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      isGlobal: true,
      load: [configuration],
    }),
    WellKnownModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
