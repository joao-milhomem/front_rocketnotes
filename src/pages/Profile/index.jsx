import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Avatar, Container, Form } from "./styles";
import avatarPlaceholderIMG from "../../assets/avatar_placeholder.svg";

import { useAuthContext } from "../../hooks/auth";
import { useState } from "react";
import { api } from "../../services/api";

export function Profile() {
  const { user, updateProfile } = useAuthContext();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState();
  const [oldPassword, setOldPassword] = useState();

  const avatarPreview = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholderIMG;
  
  const [avatar, setAvatar] = useState(avatarPreview);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate() {
    const userUpdated = {
      name,
      email,
      password,
      old_password: oldPassword,
      avatar: user.avatar,
    };

    await updateProfile(userUpdated, avatarFile);
  }

  function handleAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);
    setAvatar(URL.createObjectURL(file));
  }

  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt="Foto de perfil" />

          <label htmlFor="avatar">
            <FiCamera />
          </label>

          <input type="file" name="" id="avatar" onChange={handleAvatar} />
        </Avatar>

        <Input
          type="text"
          placeholder="Nome"
          icon={FiUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha atual"
          icon={FiLock}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Nova senha"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  );
}
