import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from "react-icons/ri";
import { useAuthContext } from "../../hooks/auth";
import { api } from "../../services/api";
import avatarSVG from "../../assets/avatar_placeholder.svg";

export function Header() {
  const { singOut, user } = useAuthContext();
  const avatarView = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarSVG;

  return (
    <Container>
      <Profile to="/profile">
        <img src={avatarView} alt="Foto de perfil" />

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
