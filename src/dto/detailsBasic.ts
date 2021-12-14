
import { Rule, RuleType } from '@midwayjs/decorator';

export class DetailSaveBasicDTO {
  @Rule(RuleType.string().required())
  id:string

  @Rule(RuleType.string().required())
  basicObject:string
}
