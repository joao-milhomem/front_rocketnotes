import { Brand, Container, Content, Menu, NewNote, Search } from "./styles";
import { Header } from "../../components/header";
import { ButtonText } from "../../components/ButtonText";
import { FiPlus, FiSearch } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Home() {
  const [tags, setTags] = useState();

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags");
      setTags(response.data);
    }

    fetchTags();
  }, []);

  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText title="Todos" isActive />
        </li>

        {tags &&
          tags.map((tag) => (
            <li>
              <ButtonText title={tag.name} key={String(tag.id)} />
            </li>
          ))}
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
            to
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
            t
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

      <NewNote to="/new">
        <FiPlus />
        <span>Nova nota</span>
      </NewNote>
    </Container>
  );
}
