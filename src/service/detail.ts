import { Provide } from '@midwayjs/decorator'
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { Detail } from '@/entity/detail';


@Provide('ApiDetailService')
export class ApiDetailService {
  @InjectEntityModel(Detail)
  detailModel: Repository<Detail>;
  async getOne(id:string){
    // find first
    const detailResult = await this.detailModel.findOne({id});
    return detailResult
 }
  async index (id:string): Promise<any> {
    return await Promise.resolve(this.getOne(id))
  }
}
