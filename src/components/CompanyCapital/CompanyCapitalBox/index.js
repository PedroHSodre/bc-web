import { Typography } from "@mui/material";
import React from "react";
import { Container } from "./styled";

export default function CompanyCapitalBox({ textColor = "blue", value }) {
  return (
    <Container>
      <Typography variant="h4" color={textColor} role="companyCapitalValue">
        R$ {value}
      </Typography>
    </Container>
  );
}
