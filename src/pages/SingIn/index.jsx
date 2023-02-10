import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiLock, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
export function SingIn() {
  return (
    <Container>
      <Form>
        <h1>Rocketnotes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>
        <h2>Faça seu login</h2>

        <Input placeholder="Email" icon={FiMail} type="mail" />
        <Input placeholder="Senha" icon={FiLock} type="password" />
        <Button title="Entrar" />

        <Link to="/register" title="Criar conta">
          Criar conta
        </Link>
      </Form>

      <Background />
    </Container>
  );
}
