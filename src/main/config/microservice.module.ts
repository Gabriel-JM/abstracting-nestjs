import { Module } from '@nestjs/common';

import { adaptedModules } from '../adapters/nest-route-adapter';

@Module({
  imports: [
    ...adaptedModules,
  ],
})
export class MicroserviceModule {}
