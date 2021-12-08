import { Ddata } from '@/interface/detail-index'
import React, { useContext } from 'react'
import { IContext, SProps } from 'ssr-types-react'

import { STORE_CONTEXT } from '_build/create-context'


export default function Detail (props: SProps) {
  const { state } = useContext<IContext<Ddata>>(STORE_CONTEXT)
  return (
    <div>
    <div>{state?.detailData?.data[0].title||'暂无'}</div>
    <div>{state?.detailData?.data[0].describe||'暂无'}</div>
    <img src={state?.detailData?.data[0].img} alt={state?.detailData?.data[0].title} />
    </div>
  )
}
