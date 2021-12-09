import { parseJsonByString } from '@/components/common/utils'
import { Ddata } from '@/interface/detail-index'
import React, { useContext, useMemo } from 'react'
import { IContext, SProps } from 'ssr-types-react'

import { STORE_CONTEXT } from '_build/create-context'


export default function Detail (props: SProps) {
  const { state } = useContext<IContext<Ddata>>(STORE_CONTEXT)
  console.log('state: ', state?.detailData?.descObject);
  return (
    <div>
    <div>{state?.detailData?.descObject||'暂无'}</div>
    </div>
  )
}
