import { Injectable } from '@nestjs/common';
import * as ChildProcess from 'child_process';

@Injectable()
export class AppService {
  getNewLotteryNumbers() {
    const lotto: ChildProcess.ChildProcessWithoutNullStreams =
      ChildProcess.spawn('python3', ['test.py']);

    lotto.stdout.on('data', async (lotto: any) => {
      const lottoNumbers = lotto.toString().split('\n');

      console.log(lottoNumbers);
    });

    lotto.stderr.on('data', (err) => {
      err.toString();
    });
  }
}
