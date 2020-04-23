import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const pages = ["/", "about", "contact"];

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 30px;
  font-size: 30px;
  padding: 1rem;
`;

const PageLink = styled(Link)`
  color: grey;
  text-decoration: none;
`;

const Header = () => (
  <HeaderContainer>
    {pages.map(page => (
      <PageLink to={page}>{page}</PageLink>
    ))}
  </HeaderContainer>
);

export default Header;
