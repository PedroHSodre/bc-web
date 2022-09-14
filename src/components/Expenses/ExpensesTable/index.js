import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer as TableContainerMUI,
  TableHead,
  TableRow,
} from "@mui/material";
import { TableContainer, Typography } from "./styled";
import { useEffect } from "react";
import { useState } from "react";
import { getExpenses } from "../../../repositories/ExpensesRepository";
import { getToken } from "../../../services/auth";

export default function ExpensesTable() {
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  async function getData(id, name, value, quantity) {
    const response = await getExpenses();
    setExpenses(response.data)
  }

  return (
    <TableContainer>
      <TableContainerMUI
        component={Paper}
        style={{ backgroundColor: "transparent" }}
      >
        <Table sx={{ minWidth: 650 }} size="medium">
          <TableHead>
            <TableRow>
              <TableCell style={{ borderColor: "black" }}>
                <Typography>ID</Typography>
              </TableCell>
              <TableCell style={{ borderColor: "black" }}>
                <Typography>Titulo</Typography>
              </TableCell>
              <TableCell style={{ borderColor: "black" }}>
                <Typography>Valor</Typography>
              </TableCell>
              <TableCell style={{ borderColor: "black" }}>
                <Typography>Quantidade</Typography>
              </TableCell>
              <TableCell style={{ borderColor: "black" }}>
                <Typography>Total</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {expenses.map((row) => (
              <TableRow key={row.id}>
                <TableCell style={{ borderColor: "black" }}>
                  <Typography>{row.id}</Typography>
                </TableCell>
                <TableCell style={{ borderColor: "black" }}>
                  <Typography>{row.title}</Typography>
                </TableCell>
                <TableCell style={{ borderColor: "black" }}>
                  <Typography>{row.value}</Typography>
                </TableCell>
                <TableCell style={{ borderColor: "black" }}>
                  <Typography>{row.quantity}</Typography>
                </TableCell>
                <TableCell style={{ borderColor: "black" }}>
                  <Typography>{row.total}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainerMUI>
    </TableContainer>
  );
}
