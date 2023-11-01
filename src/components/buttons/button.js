import styled from "styled-components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Typography } from "@mui/material";

const StyledButton = styled.div`
  display: flex;
  align-items: center;
  background: #017841;
  padding: 1rem;
  border-radius: 50px;
  cursor: pointer;
`;

const Button = ({ label, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <Typography>{label}</Typography>
      <ArrowForwardIosIcon />
    </StyledButton>
  );
};

export default Button;
