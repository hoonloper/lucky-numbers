import {
  BadGatewayException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import * as ChildProcess from 'child_process';
import { InjectRepository } from '@nestjs/typeorm';
import { LottoEntity } from './entity/lottos.entity';
import { InsertResult, Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(LottoEntity)
    private readonly lottoModel: Repository<LottoEntity>,
  ) {}

  getNewLotteryNumbers() {
    return new Promise((resolve, reject) => {
      const pythonLotto: ChildProcess.ChildProcessWithoutNullStreams =
        ChildProcess.spawn('python3', ['lotto.py']);

      pythonLotto.stdout.on('data', async (lottoNumbers: any) => {
        resolve(this.saveLottoNumbers(JSON.parse(lottoNumbers)));
      });

      pythonLotto.stderr.on('data', (err) => {
        reject(err.toString());
      });
    });
  }

  saveLottoNumbers(numbers: any): void {
    try {
      this.lottoModel
        .createQueryBuilder()
        .insert()
        .into(LottoEntity)
        .values({
          firstNum: numbers[0],
          secondNum: numbers[1],
          thirdNum: numbers[2],
          fourthNum: numbers[3],
          fifthNum: numbers[4],
          sixthNum: numbers[5],
        })
        .execute();
    } catch {
      throw new InternalServerErrorException('알 수 없는 서버 에러입니다.');
    }
  }

  getLatestLotteryNumbers(): Promise<LottoEntity> {
    try {
      return this.lottoModel
        .createQueryBuilder('lottos')
        .select([
          'lottos.idx AS idx',
          'lottos.firstNum AS first',
          'lottos.secondNum AS second',
          'lottos.thirdNum AS third',
          'lottos.fourthNum AS fourth',
          'lottos.fifthNum AS fifth',
          'lottos.sixthNum AS sixth',
          'DATE_FORMAT(lottos.createdAt, "%Y년 %m월 %d일") AS createdAt',
        ])
        .orderBy('lottos.createdAt', 'DESC')
        .getRawOne();
    } catch {
      throw new InternalServerErrorException('알 수 없는 서버 에러입니다.');
    }
  }
}

// if (!raw.affectedRows) {
//   throw new BadGatewayException(
//     '로또 번호가 정상적으로 저장되지 않았습니다.',
//   );
// }
