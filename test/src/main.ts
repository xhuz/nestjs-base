import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {logger} from '../../logger/logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  logger.info('服务开启');
  await app.listen(8090);
}

bootstrap().catch(error => console.log(error));
