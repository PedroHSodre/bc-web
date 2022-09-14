import React from "react";
import { Typography } from "@mui/material";
import { useState } from "react";
import { Container } from "./styled";

export default function ExpensesBox({ textColor = "red", ...props }) {
  const [value, setValue] = useState("150,00");
  return (
    <Container justifyContent={props.justifyContent}>
      <Typography variant="h4" color={textColor} role="expenseValue">
        R$ {value}
      </Typography>
    </Container>
  );
}
