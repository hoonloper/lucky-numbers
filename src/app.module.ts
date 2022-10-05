import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TYPEORM_CONFIG } from './configs/typeorm.config';
import { LottoEntity } from './entity/lottos.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(TYPEORM_CONFIG),
    TypeOrmModule.forFeature([LottoEntity]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
