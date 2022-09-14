import React from "react";
import { Container, Typography } from "./styled";

export default function CreateExpense(props) {
  return (
    <Container onClick={props.onClick}>
      <Typography>Add Nova Despesa</Typography>
    </Container>
  );
}
