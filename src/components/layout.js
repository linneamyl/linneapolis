import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  color: white;
  padding: 0 15rem;
`;

const Layout = ({ children, ref }) => {
  return <Container ref={ref}>{children}</Container>;
};

export default Layout;
