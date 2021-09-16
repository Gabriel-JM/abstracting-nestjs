import { Controller, Module } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

interface NestJsAdaptRouteParams {
  topic: string;
}

interface ControllerRequest {
  headers: unknown;
  body: unknown;
}

interface Controller {
  handler(request: ControllerRequest): Promise<unknown>;
}

export const adaptedModules = [];

export function adaptRoute(controller: Controller, { topic }: NestJsAdaptRouteParams): void {
  class AdaptedController {
    @MessagePattern(topic)
    handle(@Payload() payload: { headers: unknown; value: unknown }) {
      const { headers = {}, value: body = {} } = payload;

      controller.handler({
        headers,
        body,
      });

      return new Error('not implemented');
    }
  }

  @Module({
    controllers: [AdaptedController],
  })
  class AdaptedModule {}

  adaptedModules.push({ module: AdaptedModule });
}
