import { Ddata } from '@/interface/detail-index'
import { ReactMidwayFetch } from 'ssr-types-react'


const fetch: ReactMidwayFetch<{
  apiDeatilservice: {
    index: (id: string) => Promise<Ddata>
  }
}, {id: string}> = async ({ ctx, routerProps }) => {
  // 阅读文档获得更多信息 http://doc.ssr-fc.com/docs/features$fetch#%E5%88%A4%E6%96%AD%E5%BD%93%E5%89%8D%E7%8E%AF%E5%A2%83
  const data =  await ctx!.apiDeatilservice.index(ctx!.params.id)
  return {
    // 建议根据模块给数据加上 namespace防止数据覆盖
    detailData: data
  }
}
export default fetch