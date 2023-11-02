import React from "react";
import styled from "styled-components";
import { breakpoins } from "../theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  color: white;
  padding: 1rem;

  @media ${breakpoins.tablet} {
    padding: 1rem 5rem;
  }
  @media ${breakpoins.laptop} {
    padding: 0 15rem;
  }
  @media ${breakpoins.laptopL} {
    padding: 0 20rem;
  }
`;

const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;
