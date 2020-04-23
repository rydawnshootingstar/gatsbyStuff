import React from "react";
import styled from "styled-components";

const Foot = styled.footer`
  max-height: 250px;
  width: 100%;
  background: grey;
  display: flex;
  justify-content: center;
  padding: 2rem;
`;
const Footer = () => (
  <Foot>
    <p>copyright nobody 2020</p>
  </Foot>
);

export default Footer;
