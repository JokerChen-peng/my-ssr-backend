
import { DetailSaveDTO } from '@/dto/details';
import { DetailService } from '@/service/api-detail';
import { Inject, Provide, Controller, Get, Post,Body,Validate,ALL, Query,
} from '@midwayjs/decorator';
import { Context } from '@midwayjs/faas';
import { getStandardResponse } from '../util/common'
@Provide()
@Controller('/api/detail/')
export class DetailController {
  @Inject()
  ctx: Context;
  
  @Inject()
  detailService:DetailService

  @Get('/getDetail')
  async getDetail(@Query() id: string) {
      const result =  await this.detailService.find(id);
      return getStandardResponse(true,result)
  } 

  @Post('/save')
  @Validate()
  async save(@Body(ALL) bodyObj:DetailSaveDTO) {
    const find =  await this.detailService.find(bodyObj.id);
    let result
    if(find){
      result =await this.detailService.update(bodyObj.id,bodyObj.descObject)
    }else{
       result =  await this.detailService.save(bodyObj.id,bodyObj.descObject)
    }
    return getStandardResponse(true,result)
  }
}
