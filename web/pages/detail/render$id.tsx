import { parseJsonByString } from '@/components/common/utils'
import { Ddata } from '@/interface/detail-index'
import styled from '@emotion/styled'
import React, { useContext, useMemo } from 'react'
import { IContext, SProps } from 'ssr-types-react'
import 'normalize.css'
import { STORE_CONTEXT } from '_build/create-context'

const Container = styled.div`
 background-image:url('https://tse1-mm.cn.bing.net/th/id/OIP-C.DyZaJoGveFRiAuCgZ3JcTgHaEK?w=324&h=182&c=7&r=0&o=5&dpr=1.5&pid=1.7');
 /* background-color:'#ddd' */
 background-repeat: no-repeat;
 background-size: cover;
`
export default function Detail (props: SProps) {
  const { state } = useContext<IContext<Ddata>>(STORE_CONTEXT)
  const detailHtml =useMemo<any>(()=>parseJsonByString(state?.detailData?.descObject as string,{}),[state])
  return (<div>
   <Container>
      <div dangerouslySetInnerHTML={{__html: detailHtml}}></div>
   </Container>
   </div>
  )
}
