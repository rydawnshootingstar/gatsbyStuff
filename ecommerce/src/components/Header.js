import React from "react"
import styled from "styled-components"
import Head from "./Head"

const HeaderWrapper = styled.div`
  background: grey;
  height: 200px;
`

const Header = props => (
  <HeaderWrapper>
    <Head title={props.title} />
    <h1>Header </h1>
  </HeaderWrapper>
)

export default Header
