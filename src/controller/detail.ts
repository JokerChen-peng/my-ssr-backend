import { DetailSaveDTO } from "@/dto/details";
import { DetailSaveBasicDTO } from "@/dto/detailsBasic";
import { DetailService } from "@/service/api-detail";
import {
  Inject,
  Provide,
  Controller,
  Get,
  Post,
  Body,
  Validate,
  ALL,
  Query,
} from "@midwayjs/decorator";
import { Context } from "@midwayjs/faas";
import { getStandardResponse } from "../util/common";
@Provide()
@Controller("/api/detail/")
export class DetailController {
  @Inject()
  ctx: Context;

  @Inject()
  detailService: DetailService;

  @Get("/getDetail")
  async getDetail(@Query() id: string) {
    const result = await this.detailService.find(id);
    return getStandardResponse(true, result);
  }

  @Post("/save")
  @Validate()
  async save(@Body(ALL) bodyObj: DetailSaveDTO) {
    const find = await this.detailService.find(bodyObj.id);
    let result;
    if (find) {
      result = await this.detailService.update(bodyObj.id, bodyObj.descObject);
    } else {
      result = await this.detailService.save(bodyObj.id, bodyObj.descObject);
    }
    return getStandardResponse(true, result);
  }
  @Post("/saveBasic")
  @Validate()
  async saveBasic(@Body(ALL) bodyObj: DetailSaveBasicDTO) {
    console.log(bodyObj)
    const find = await this.detailService.find(bodyObj.id);
    console.log('find: ', find);
    let result;
    if (find) {
      result = await this.detailService.updateBaisc(bodyObj.id, bodyObj.basicObject);
    } else {
      result = await this.detailService.saveBaisc(bodyObj.id, bodyObj.basicObject);
    }
    return getStandardResponse(true, result);
  }
}
