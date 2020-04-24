import React from "react";
import styled from "styled-components";
import colors from "../styles/colorPalette";

const Wrapper = styled.div`
  min-height: 100vh;
  max-width: 100%;
  display: grid;
  color: ${colors.text};
  grid-template-rows: 1fr 5fr 1fr;
  background: ${colors.secondary};
  font-family: "Merriweather";
`;
export default Wrapper;
