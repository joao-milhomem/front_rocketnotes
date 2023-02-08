import { Container, Profile, Logout } from "./styles";
import {RiShutDownLine} from 'react-icons/ri'
export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/diego3g.png" alt="Foto de perfil" />

        <div>
          <span>Bem vindo</span>
          <strong>Diego Fernandes</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine/>
      </Logout>
    </Container>
  );
}
