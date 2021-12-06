export interface IData {
  indexData: IndexData
}

export interface IndexData {
  schema: string
}
export interface Schema{
  id:any,
  name?: string,
  attributes:Record<string, string|undefined>,
  children: Schema[]
}
export type ParseJsonBystring =(str:string,defaultValue:any)=>any
export type PartialSchema =Partial<Schema>