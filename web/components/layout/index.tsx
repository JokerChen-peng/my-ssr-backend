
import { STORE_CONTEXT } from '@/../build/create-context'
import React, { useContext, useMemo } from 'react'
import { LayoutProps } from 'ssr-types-react'
import { parseJsonByString } from '../common/utils'
import App from './App'


const Layout = (props: LayoutProps) => {
  // 注：Layout 只会在服务端被渲染，不要在此运行客户端有关逻辑
  const {state} = useContext(STORE_CONTEXT)
  const pageSchema =useMemo<any>(()=>parseJsonByString(state?.indexData?.schema as string,{}),[state])
  const basicdata =useMemo<any>(()=>parseJsonByString(state?.detailData?.basicObject as string,{}),[state])
  const {attributes={}} = pageSchema
  const { injectState } = props
  const { injectCss, injectScript } = props.staticList!
  const path = props.ctx?.request.path
  if (/detail/.test(path as string)) {
    return (
      <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        <meta name='theme-color' content='#000000' />
        <title>{basicdata?.title}</title>
         <meta name='keywords' content={basicdata?.keywords}/>
         <meta name='description' content={basicdata?.desc}/>
        { injectCss }
      </head>
      <body>
        <div id="app"><App {...props} ></App></div>
        { injectState }
        { injectScript }
      </body>
    </html>
    )
  } else {
    return (
      <html lang='en'>
        <head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
          <meta name='theme-color' content='#000000' />
          <title>{attributes?.title}</title>
           <meta name='keywords' content={attributes?.keyword}/>
           <meta name='description' content={attributes?.desc}/>
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
 
}

export default Layout
