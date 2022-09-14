import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import LoginInput from "../../components/Inputs/LoginInput";
import {
  Container,
  InputsContainer,
  Modal,
  Header,
  ButtonsContainer,
} from "./styles";
import Button from "@mui/material/Button";
import { login } from "../../hooks/Auth";
import { isAuthenticated } from "../../services/auth";
import { useNavigate } from "react-router-dom";

function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleEmail(e) {
    const email = e.target.value;
    setEmail(email);
  }

  function handlePassword(e) {
    const password = e.target.value;
    setPassword(password);
  }

  async function handleLogin() {
    const res = await login({ email, password });
    if (res.message) {
      navigate("/dashboard", { user: res.user });
    }
  }

  return (
    <Container>
      <Modal>
        <Header>
          <Typography variant="h3" color="white" style={{ margin: "30px 0" }}>
            Big Company
          </Typography>
        </Header>
        <InputsContainer>
          <LoginInput
            setState={handleEmail}
            placeholder="Digite seu e-mail..."
          />
          <LoginInput
            setState={handlePassword}
            placeholder="Digite sua senha..."
            type="password"
          />
        </InputsContainer>
        <ButtonsContainer>
          <Button
            variant="contained"
            role={"handleLoginBtn"}
            onClick={handleLogin}
          >
            Fazer Login
          </Button>
          <Button
            variant="contained"
            style={{ margin: "30px 0" }}
            color="warning"
          >
            Esquecia minha senha
          </Button>
        </ButtonsContainer>
      </Modal>
    </Container>
  );
}

export default Login;
