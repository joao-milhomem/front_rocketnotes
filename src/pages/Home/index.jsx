import { Brand, Container, Content, Menu, NewNote, Search } from "./styles";
import { Header } from "../../components/header";
import { ButtonText } from "../../components/ButtonText";
import { FiPlus, FiSearch } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText title="Node" />
        </li>
        <li>
          <ButtonText title="React" isActive />
        </li>
        <li>
          <ButtonText title="Express" />
        </li>
        <li>
          <ButtonText title="UseEstate" />
        </li>
      </Menu>

      <Search>
        <Input
          icon={FiSearch}
          type="text"
          placeholder="Encontre uma anotação"
        />
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note
            data={{
              title: "Minhas notas",
              tags: [
                {
                  name: "Tag 1",
                  id: "1",
                },

                {
                  name: "Tag 2",
                  id: "2",
                },
              ],
            }}
          />

          <Note
            data={{
              title: "Minhas notas",
              tags: [
                {
                  name: "Tag 1",
                  id: "1",
                },

                {
                  name: "Tag 2",
                  id: "2",
                },
              ],
            }}
          />
        </Section>
      </Content>

      <NewNote>
        <FiPlus />
        <span>Nova nota</span>
      </NewNote>
    </Container>
  );
}
