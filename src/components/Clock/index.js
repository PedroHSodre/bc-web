import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Container } from "./styled";

export default function Clock() {
  const [time, setTime] = useState();

  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <Container>
      <Typography variant="h2">{time}</Typography>
    </Container>
  );
}
