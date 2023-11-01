import React from "react";
import styled from "styled-components";
import { Heading } from "./typography/heading";
import { Lead } from "./typography/lead";
import Button from "./buttons/button";
import { breakpoins } from "../theme";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background: #dbeefb;
  width: 100%;
  text-align: center @media ${breakpoins.tablet} {
    padding: 2rem 1rem;
  }
`;

const CtaButton = ({ heading, lead, buttonLabel, onClick, image }) => {
  return (
    <ButtonContainer>
      <img src={image} className="App-logo" alt="logo" />
      <Heading>{heading}</Heading>
      <Lead>{lead}</Lead>
      <Button label={buttonLabel} onClick={onClick} />
    </ButtonContainer>
  );
};

export default CtaButton;
