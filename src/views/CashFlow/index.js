import React from "react";
import CashFlowDetail from "../../components/CashFlowDetail";
import ExpensesBox from "../../components/Expenses/ExpensesBox";
import InvoicingBox from "../../components/Invoicing/InvoicingBox";
import Navbar from "../../components/Navbar";
import { Container, Content, InvoicingBoxContainer } from "./styled";

export default function CashFlow() {
  return (
    <Container>
      <Navbar />
      <Content>
        <CashFlowDetail>
          <InvoicingBoxContainer>
            <InvoicingBox justifyContent="flex-start" />
          </InvoicingBoxContainer>
        </CashFlowDetail>
        <CashFlowDetail>
          <InvoicingBoxContainer>
            <ExpensesBox justifyContent="flex-start" />
          </InvoicingBoxContainer>
        </CashFlowDetail>
      </Content>
    </Container>
  );
}
