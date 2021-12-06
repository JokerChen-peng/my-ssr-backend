import { Provide } from '@midwayjs/decorator'
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { Schema } from '../entity/schema';

@Provide('ApiService')
export class ApiIndexService {
  @InjectEntityModel(Schema)
  schemaModel: Repository<Schema>;
  async getLastestOne(){
    // find first
    const schemaResult = await this.schemaModel.findOne({
      select:['schema'],
      order:{id:'DESC'}
    });
    return schemaResult
 }
  async index (): Promise<any> {
    return await Promise.resolve(this.getLastestOne())
  }
}
