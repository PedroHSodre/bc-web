import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { Container } from "./styled";
export default function Close(props) {
  return (
    <Container>
      <AiFillCloseCircle
        onClick={props.onClick}
        size={props.size}
        color={props.color}
        style={{ cursor: "pointer" }}
      />
    </Container>
  );
}
