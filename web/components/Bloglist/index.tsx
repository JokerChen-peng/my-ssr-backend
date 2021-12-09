import styled from '@emotion/styled'
import React from 'react';
import { Schema } from '../../interface/page-index'
import { Wrapper } from '../common/utils'

interface ListProps {
  schema:Schema
}
type imgProps = {
  imgHeight?: string
  imgWidth?: string
}
export const BlogList = ({schema}:ListProps) => {
  const {children=[]} = schema;

  return(<Wrapper>
    <List>
    {children.map(({attributes:{imgeUrl,title,description,link,height,width}},index)=>(
      <ListItem key={index}>
        <Link href={link} target='_blank' rel='noreferrer'>
        <Img src={imgeUrl} alt={title} imgHeight={height} imgWidth={width}/>
        <Title>{title||'暂无标题'}</Title>
        <Desc>{description||'暂无标题'}</Desc>
        </Link>
    </ListItem>
    ))}
    </List></Wrapper>)
}
 
const List = styled.ul`
 margin:0;
 padding:0 0 10px 0;
 display: flex;
 flex-wrap: wrap;
 list-style-type:none;
`
const ListItem = styled.li`
  width:20%;
  margin-top: 10px;
`
const Img = styled.img<imgProps>`
 display: block;
 width: ${props=>props.imgWidth};
 height:${props=>props.imgHeight};
 margin:0 auto;
 border-radius: 10px;
`
const Title = styled.h4`
 overflow: hidden;
 margin:0;
 padding: 0 10px;
 line-height: 32px;
 font-size: 16px;
 font-weight: normal;
 white-space: nowrap;
 text-overflow: ellipsis;
`
const Desc = styled.p`
 overflow: hidden;
 margin:0;
 padding: 0 10px;
 line-height: 24px;
 font-size: 14px;
 font-weight: normal;
 color:#777;
 text-overflow: ellipsis;
 display: -webkit-box;
 -webkit-box-orient:vertical;
 -webkit-line-clamp:4;
`
const Link = styled.a`
  color:#333;
  text-decoration: none;
`