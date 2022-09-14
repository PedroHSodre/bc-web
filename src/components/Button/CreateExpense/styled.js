import styled from "styled-components";
import { Typography as TypographyMUI } from "@mui/material";

export const Container = styled.button`
  background-color: rgb(119, 153, 255);
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin: 0 0 15px;
  cursor: pointer;

  &:hover {
    background-color: rgb(68, 118, 255);
    transition: all 1s;
  }
`;

export const Typography = styled(TypographyMUI)(({ theme }) => ({
  color: "white",
}));
