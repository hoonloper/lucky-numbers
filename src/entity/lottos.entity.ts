import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('lottos')
export class LottoEntity {
  @PrimaryGeneratedColumn({ name: 'idx' })
  idx: number;

  @Column('tinyint', { name: 'first_num' })
  firstNum: number;

  @Column('tinyint', { name: 'second_num' })
  secondNum: number;

  @Column('tinyint', { name: 'third_num' })
  thirdNum: number;

  @Column('tinyint', { name: 'fourth_num' })
  fourthNum: number;

  @Column('tinyint', { name: 'fifth_num' })
  fifthNum: number;

  @Column('tinyint', { name: 'sixth_num' })
  sixthNum: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
