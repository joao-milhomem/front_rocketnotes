import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiLock, FiMail, FiUser } from "react-icons/fi";
export function SingUp() {
  return (
    <Container>
      <Background />

      <Form>
        <h1>Rocketnotes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>
        <h2>Crie sua conta</h2>

        <Input placeholder="Nome" icon={FiUser} type="text" />
        <Input placeholder="Email" icon={FiMail} type="mail" />
        <Input placeholder="Senha" icon={FiLock} type="password" />
        <Button title="Cadastrar" />

        <a href="">Voltar para o login</a>
      </Form>
    </Container>
  );
}
