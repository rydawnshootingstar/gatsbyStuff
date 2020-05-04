import React from "react";
import styled from "styled-components";
import Header from "../header";
import Footer from "../footer";
import Wrapper from "../wrapper";
import Head from "../../components/head";
import "../../styles/index.css";

/*
    ===grid===
    header
    children
    footer
*/

const Body = styled.span`
  padding: 1rem;
  h1 {
    margin-bottom: 50px;
    text-align: center;
  }
`;

const ThreePartGrid = props => (
  <Wrapper>
    <Head title={props.title} />
    <Header />
    <Body>{props.children}</Body>
    <Footer />
  </Wrapper>
);

export default ThreePartGrid;
