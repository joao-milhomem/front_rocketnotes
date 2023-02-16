import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from "react-icons/ri";
import { useAuthContext } from "../../hooks/auth";

export function Header() {
  const { singOut } = useAuthContext();

  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/diego3g.png" alt="Foto de perfil" />

        <div>
          <span>Bem vindo</span>
          <strong>Diego Fernandes</strong>
        </div>
      </Profile>

      <Logout onClick={singOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
