import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getNewLotteryNumbers() {
    return 'Hello LUCKY NUMBER!';
  }
}
