import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Avatar, Container, Form } from "./styles";

export function Profile(params) {
  return (
    <Container>
      <header>
        <a href="">
          <FiArrowLeft />
        </a>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/joao-milhomem.png" alt="Foto de perfil" />
          
          <label htmlFor="avatar">
            <FiCamera/>
          </label>

          <input type="file" name="" id="avatar" />
        </Avatar>
        <Input type="text" placeholder="Nome" icon={FiUser} />
        <Input type="email" placeholder="Email" icon={FiMail} />
        <Input type="password" placeholder="Senha atual" icon={FiLock} />
        <Input type="password" placeholder="Nova senha" icon={FiLock} />

        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
