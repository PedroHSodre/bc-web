import styled from "styled-components";
import { Typography as TypographyMUI } from "@mui/material";

export const TableContainer = styled.div`
  width: 100%;
  height: 80%;
`;

export const Typography = styled(TypographyMUI)(({ theme }) => ({
  color: "white",
}));
