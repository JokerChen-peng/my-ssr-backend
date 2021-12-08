
import React from "react"
import { SProps } from "ssr-types-react"
import homeIcon from '@/images/scarecrow.png';
import { Container } from "@/components/common/utils";

export default function NotFound (props:SProps) {


  return (
    <Container data-testid="notfound-container">
    <header>
      <h2>404 NOT FOUND</h2>
    </header>
    <section>
      <div>
        <img src={homeIcon} alt="straw man" />
      </div>
      <div>
        <h1>我有个坏消息要告诉你</h1>
        <p>
        你要查找的页面可能会被删除或暂时不可用
        </p>
        <a title="Go to home page" href="/">
          返回主页
        </a>
      </div>
    </section>
    <footer>
      <strong>裤袜屋 @ 洛阳</strong>
    </footer>
  </Container>
  )
  }
