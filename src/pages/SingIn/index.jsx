import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiLock, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

import { useAuthContext } from "../../hooks/auth";
import { useState } from "react";

export function SingIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { singIn } = useAuthContext();

  function handleSingIn() {
    singIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <h1>Rocketnotes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>
        <h2>Faça seu login</h2>

        <Input
          placeholder="Email"
          icon={FiMail}
          type="mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          icon={FiLock}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button title="Entrar" onClick = {handleSingIn} />

        <Link to="/register" title="Criar conta">
          Criar conta
        </Link>
      </Form>

      <Background />
    </Container>
  );
}
