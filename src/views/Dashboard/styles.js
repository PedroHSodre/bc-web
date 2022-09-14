import styled from "styled-components";
import { styled as styledMUI } from "@mui/material/styles";
import { Paper, Typography as TypographyMUI } from "@mui/material";
import { Link as LinkRRD } from "react-router-dom";

export const Container = styled.div`
  background: linear-gradient(
    180deg,
    #2a6cb9 0%,
    rgba(42, 108, 185, 0.12) 100%
  );
  height: 100vh;
  display: flex;
`;

export const Content = styled.div`
  margin-top: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Item = styledMUI(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  textAlign: "center",
  color: "white",
  height: "200px",
}));

export const Typography = styled(TypographyMUI)(({ theme }) => ({
  backgroundColor: "transparent",
  textAlign: "center",
  color: "white",
  height: "200px",
}));

export const Link = styled(LinkRRD)(({ theme }) => ({
  textDecoration: "none",
  color: "white",
}));
