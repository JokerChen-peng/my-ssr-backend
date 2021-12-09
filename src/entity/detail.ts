import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryColumn } from 'typeorm';


@EntityModel()
export class Detail {

  @PrimaryColumn()
  id: string;

  @Column('text')
  descObject:string
}