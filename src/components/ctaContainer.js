import React from "react";
import styled from "styled-components";
import { Heading } from "./typography/heading";
import { Lead } from "./typography/lead";
import Button from "./buttons/button";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 5rem;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background: #dbeefb;
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
