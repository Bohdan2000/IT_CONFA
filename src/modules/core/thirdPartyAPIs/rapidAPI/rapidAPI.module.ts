import { Module, HttpModule } from '@nestjs/common';
import { RapidAPIController } from './rapidAPI.controller';
import { RapidAPIService } from './rapidAPI.service';

@Module({
  imports: [HttpModule],
  controllers: [RapidAPIController],
  providers: [RapidAPIService],
  exports: [RapidAPIService, HttpModule ],
})
export class RapidAPIModule { }