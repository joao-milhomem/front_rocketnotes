import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from "react-icons/ri";
import { useAuthContext } from "../../hooks/auth";
import { api } from "../../services/api";

export function Header() {
  const { singOut, user } = useAuthContext();
  const avatarPreview = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholderIMG;
  
  return (
    <Container>
      <Profile to="/profile">
        <img src={avatarPreview } alt="Foto de perfil" />

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
