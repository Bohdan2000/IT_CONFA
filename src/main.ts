import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import APP_CONFIG from './config/app.config';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(APP_CONFIG.PORT);
}
bootstrap();
