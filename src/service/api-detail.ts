import { Detail } from '@/entity/detail';
import { Provide} from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';


@Provide()
export class DetailService {
  
  @InjectEntityModel(Detail)
  detailModel: Repository<Detail>;
  //向数据库里新增一条数据
 async save(id:string,descObject:string){
    // create a entity object
    const detail = new Detail();
    detail.id = id;
    detail.descObject = descObject;
    detail.basicObject = "默认信息";
    // save entity
    const detailResult = await this.detailModel.save(detail);
    // save success
    return detailResult
  }
  async find(id:string){
     // find first
     const detailResult = await this.detailModel.findOne({id});
     return detailResult
  }
  async update(id:string,descObject:string){
    // find first
    const detailResult = await this.detailModel.findOne({id});
    detailResult.descObject = descObject
    await this.detailModel.save(detailResult);
    return detailResult
 }
 async saveBaisc(id:string,baiscObject:string){
   // create a entity object
   const detail = new Detail();
   detail.id = id;
   detail.basicObject = baiscObject;
   detail.descObject = "默认信息";
   // save entity
   const detailResult = await this.detailModel.save(detail);
   // save success
   return detailResult
 }
 async updateBaisc(id:string,basicObject:string){
   // find first
   const detailResult = await this.detailModel.findOne({id});
   detailResult.basicObject = basicObject
   await this.detailModel.save(detailResult);
   return detailResult
}
 
}
