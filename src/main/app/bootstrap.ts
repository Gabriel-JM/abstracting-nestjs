import '../config/routes';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { MicroserviceModule } from '../config/microservice.module';

export async function bootstrap() {
  const app = await NestFactory.create({
    module: MicroserviceModule
  })
  
  app.listen(3000, () => Logger.log('App started'));
}
