
import { Rule, RuleType } from '@midwayjs/decorator';

export class DetailSaveDTO {
  @Rule(RuleType.string().required())
  id:string

  @Rule(RuleType.string().required())
  descObject:string
}
