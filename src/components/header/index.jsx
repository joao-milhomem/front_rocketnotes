import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <div className="profile">
        <img src="https://github.com/diego3g.png" alt="" />
        
        <div className="welcome">
          <span>Bem vindo</span>
          <p>Diego Fernandes</p>
        </div>
      </div>

      <button>x</button>
    </Container>
  );
}
