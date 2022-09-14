import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import { Container, Content, Item, Link } from "./styles";

import InvoicingBox from "../../components/Invoicing/InvoicingBox";
import ExpensesBox from "../../components/Expenses/ExpensesBox";
import CompanyCapitalBox from "../../components/CompanyCapital/CompanyCapitalBox";
import { useUser } from "../../hooks/User";
import { useParams } from "react-router-dom";
import EmployesList from "../../components/EmployesList";
import Clock from "../../components/Clock";

function Dashboard() {
  const { user, setUserLogged } = useUser();
  const { user: userData } = useParams();

  useEffect(() => {
    setUserLogged(userData);
    console.log("user: ", user, userData);
  }, []);

  return (
    <Container>
      <Navbar />
      <Content>
        <Box sx={{ width: "85%" }}>
          <Grid container spacing={4}>
            <Grid item xs={4} onClick={() => alert("Go to Invoicing Page")}>
              <Item>
                <Link to="/">
                  <Typography variant="h5">Faturamento Mês Atual</Typography>
                </Link>
                <InvoicingBox textColor="yellowgreen" value={"0"} />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <Link to="/expenses">
                  <Typography variant="h5">Despesas Mês Atual</Typography>
                </Link>
                <ExpensesBox value={"0"} />
              </Item>
            </Grid>
            <Grid item xs={4} onClick={() => alert("Go to Invoicing Page")}>
              <Item>
                <Typography variant="h5">Capital Total da Empresa</Typography>
                <CompanyCapitalBox value={"0"} />
              </Item>
            </Grid>
            <Grid item xs={4} onClick={() => alert("Go to employes Page")}>
              <Item>
                <Typography variant="h5">Funcionarios</Typography>
                <EmployesList
                  data={[
                    { nome: "Pedro", horario: "10:00:00", status: "present" },
                  ]}
                />
              </Item>
            </Grid>
            <Grid
              item
              xs={8}
              onClick={() => alert("Go to Month Invoicing Page")}
            >
              <Item>
                <Typography variant="h5">Faturamento mensal</Typography>
              </Item>
            </Grid>
            <Grid item xs={4} onClick={() => alert("Go to schedule Page")}>
              <Item>
                <Typography variant="h5">Horário</Typography>
                <Clock />
              </Item>
            </Grid>
            <Grid item xs={8} onClick={() => alert("Go to Clients Page")}>
              <Item>
                <Typography variant="h5">Clientes</Typography>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Content>
    </Container>
  );
}

export default Dashboard;
