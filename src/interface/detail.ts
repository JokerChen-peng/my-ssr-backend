
export interface IApiDetailService {
  index: (id: string) => Promise<any>
}
export interface BodyObj {
  id: string;
  descObject?:string;
  basicObject?:string
}