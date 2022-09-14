import React from "react";
import { Box, Modal, Typography } from "@mui/material";
import Close from "../../Button/Close";
import { Container } from "./styled";
import Input from "../../Inputs/Input";

const modalStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default function CreateExpense(props) {
  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      hideBackdrop
      sx={modalStyle}
    >
      <Box
        sx={{
          width: "40%",
          height: "80%",
          backgroundColor: "rgba(0, 163, 255, 0.83)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 5,
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          
          <Close onClick={props.onClose} size={50} color="rgba(0, 0, 255, 0.5)" />
          <Typography variant="h4" color="white">
            Adicionar Despesa
          </Typography>
        </Box>
        <Container>
          <Input />
        </Container>
      </Box>
    </Modal>
  );
}
