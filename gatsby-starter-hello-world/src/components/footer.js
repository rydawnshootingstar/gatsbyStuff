import React from "react";
import styled from "styled-components";
import colors from "../styles/colorPalette";

const Foot = styled.footer`
  max-height: 250px;
  width: 100%;
  background: ${colors.footer};
  display: flex;
  justify-content: center;
  padding: 2rem;
  p {
    padding-top: 50px;
  }
`;
const Footer = () => (
  <Foot>
    <p>copyright nobody 2020</p>
  </Foot>
);

export default Footer;
