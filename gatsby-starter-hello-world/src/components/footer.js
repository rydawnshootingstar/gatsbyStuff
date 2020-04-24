import React from "react";
import styled from "styled-components";
import colors from "../styles/colorPalette";
import { graphql, useStaticQuery } from "gatsby";

const Foot = styled.footer`
  max-height: 250px;
  width: 100%;
  background: ${colors.footer};
  display: block;
  text-align: center;
  padding: 2rem;
  p {
    padding-top: 25px;
  }
`;
const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);
  return (
    <Foot>
      <p>ⓒ copywrong {data.site.siteMetadata.author} 2020</p>
      <p>You may steal anything you want from this site</p>
    </Foot>
  );
};

export default Footer;
