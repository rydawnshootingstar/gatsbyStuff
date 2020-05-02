import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import colors from "../styles/colorPalette";

const pages = ["/", "about", "blog", "contact"];

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 20px;
  font-size: 30px;
  padding: 1rem;
  background: ${colors.secondary};
`;

const PageLink = styled(Link)`
  color: ${colors.primary};
  text-decoration: none;
  position: relative;
  &:before {
    content: "|";
    padding-right: 6px;
  }

  :hover {
    &:after {
      width: 100%;
      margin: 0 auto;
      left: 0;
      right: 0%;
      height: 3px;
      content: " ";
      display: block;
      position: relative;
      background: whitesmoke;
      bottom: -10px;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      {pages.map(page => (
        <PageLink to={page}>{page} |</PageLink>
      ))}
    </HeaderContainer>
  );
};

export default Header;
