import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { Container, Content } from "./styled";
import CreateExpenseButton from "../../components/Button/CreateExpense";
import ExpensesTable from "../../components/Expenses/ExpensesTable";
import CreateExpense from "../../components/Modal/CreateExpense";

export default function Expenses() {
  const [isOpenCreateExpenseModal, setIsOpenCreateExpenseModal] =
    useState(false);

  const handleCreateExpenseModal = () => {
    setIsOpenCreateExpenseModal(!isOpenCreateExpenseModal);
  };

  return (
    <Container>
      <Navbar />
      <Content>
        <CreateExpenseButton onClick={handleCreateExpenseModal} />
        <ExpensesTable />
      </Content>
      <CreateExpense
        open={isOpenCreateExpenseModal}
        onClose={handleCreateExpenseModal}
      />
    </Container>
  );
}
