import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { Container, List, Content } from "./styles";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
            vitae quod quia odit. Fuga mollitia beatae ex eum vero veritatis
            ullam voluptatem ad eveniet velit ratione, animi magnam perspiciatis
            quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            aut iste sint alias iusto. Earum eos harum voluptas expedita
            molestiae praesentium ipsa nemo! Ut minima alias deserunt porro
            voluptas nobis?
          </p>

          <Section title="Links úteis">
            <List>
              <li>
                <a href="">Link 1</a>
              </li>
              <li>
                <a href="">Link 2</a>
              </li>
              <li>
                <a href="">Link 3</a>
              </li>
            </List>
          </Section>

          <Section title="Marcadores">
            <Tag title="Teste 1" />
            <Tag title="Teste 2" />
            <Tag title="Teste 3" />
          </Section>

          <Button title="Salvar" />
        </Content>
      </main>
    </Container>
  );
}
