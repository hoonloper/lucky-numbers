import { Injectable } from '@nestjs/common';
import * as ChildProcess from 'child_process';
import { InjectRepository } from '@nestjs/typeorm';
import { LottoEntity } from './entity/lottos.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(LottoEntity)
    private readonly lottoModel: Repository<LottoEntity>,
  ) {}

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
