import { Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Container } from "./styled";

export default function InvoicingBox({ textColor = "white", ...props }) {
  const [value, setValue] = useState("150,00");
  return (
    <Container justifyContent={props.justifyContent}>
      <Typography variant="h4" color={textColor} role="invoicingValue">
        R$ {value}
      </Typography>
    </Container>
  );
}
