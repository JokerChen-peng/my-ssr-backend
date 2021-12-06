
import { Banner } from '@/components/Banner'
import { BlogList } from '@/components/Bloglist'
import { parseJsonByString } from '@/components/common/utils'
import { Footer } from '@/components/Footer'
import React, { useContext, useEffect, useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { SProps, IContext } from 'ssr-types-react'
import { STORE_CONTEXT } from '_build/create-context'
import {IData, PartialSchema, Schema} from '../../interface/page-index'
import 'normalize.css'
import '../../common.less'
const render =(item: Schema,index: number)=>{
  switch(item.name){
    case 'Banner':
      return <Banner key={index} schema={item}/>
    case 'Footer':
      return <Footer key={index} schema={item}/>
    case 'List':
      return <BlogList key={index} schema={item}/>
    default:
      return null;
  }
}

export default function Home (props:SProps) {
  const {state} = useContext<IContext<IData>>(STORE_CONTEXT)
  const [pageSchema,setPageSchema] =useState<PartialSchema>({})
  const {children=[],attributes={}} = pageSchema
 useEffect(()=>{
   const data =state?.indexData?.schema
   data&&setPageSchema(parseJsonByString(data,{}))
 },[])
  return (<HelmetProvider>
    <Helmet>
      <title>{attributes?.title||''}</title>
    </Helmet>
    {
      children.map((item,index)=>{
        return render(item,index)
      })
    }
  </HelmetProvider>)
}