import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { LottoEntity } from './entity/lottos.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  async getNewLotteryNumbers(): Promise<LottoEntity> {
    await this.appService.getNewLotteryNumbers();

    return this.appService.getLatestLotteryNumbers();
  }
}
