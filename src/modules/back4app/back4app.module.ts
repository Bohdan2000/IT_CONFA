import { Module, HttpModule } from '@nestjs/common';
import { Back4AppController } from './back4app.controller';
import { Back4AppService} from './back4app.service';

@Module({
  imports: [HttpModule],
  controllers: [Back4AppController],
  providers: [Back4AppService],
  exports: [Back4AppService],
})
export class Back4AppModule {}