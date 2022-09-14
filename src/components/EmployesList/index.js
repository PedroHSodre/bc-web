import React, { useState } from "react";
import Employe from "./Employe";
import { Container } from "./styled";

export default function EmployesList({ data: employesList = [] }) {
  return (
    <Container>
      {employesList.map((employe) => (
        <Employe data={employe} key={employe.nome} />
      ))}
    </Container>
  );
}
