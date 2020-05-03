import React from "react";
import styled from "styled-components";
import colors from "../styles/colorPalette";

const Wrapper = styled.div`
  min-height: 100vh;
  max-width: 100%;
  display: grid;
  color: ${colors.text};
  grid-template-rows: 250px 5fr 250px;
  background: ${colors.secondary};
  font-family: "Merriweather";
`;
export default Wrapper;
