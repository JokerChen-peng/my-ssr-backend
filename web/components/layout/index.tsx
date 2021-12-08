
import { STORE_CONTEXT } from '@/../build/create-context'
import { PartialSchema } from '@/interface/page-index'
import React, { useContext, useState } from 'react'
import { LayoutProps } from 'ssr-types-react'
import { parseJsonByString } from '../common/utils'
import App from './App'

const Layout = (props: LayoutProps) => {
  // 注：Layout 只会在服务端被渲染，不要在此运行客户端有关逻辑
  const {state} = useContext(STORE_CONTEXT)
  const [pageSchema] =useState<PartialSchema>(parseJsonByString(state?.indexData?.schema as string,{}))
  const {children=[],attributes={}} = pageSchema
  const { injectState } = props
  const { injectCss, injectScript } = props.staticList!
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        <meta name='theme-color' content='#000000' />
        <title>{attributes?.title}</title>
        { injectCss }
      </head>
      <body>
        <div id="app"><App {...props} ></App></div>
        { injectState }
        { injectScript }
      </body>
    </html>
  )
}

export default Layout
