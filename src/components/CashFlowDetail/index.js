import React from "react";
import InvoicingBox from "../Invoicing/InvoicingBox";
import { Container, InvoicingBoxContainer } from "./styled";

export default function CashFlowDetail({ children, ...props }) {
  return <Container>{children}</Container>;
}
