import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class CustomerEntity {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ApiProperty({ example: 'John Doe' })
  @Column({ type: 'varchar', length: 100 })
  name: string;
}
