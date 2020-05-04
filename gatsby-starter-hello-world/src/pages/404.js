import React from "react";
import ThreePartGrid from "../components/layouts/3partGrid";
import styled from "styled-components";

const FourOhFour = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 100px;
  }
`;

const NotFound = () => (
  <ThreePartGrid>
    <FourOhFour>
      <h1>Page Not Found</h1>
    </FourOhFour>
  </ThreePartGrid>
);

export default NotFound;
