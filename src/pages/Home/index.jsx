import { Brand, Container, Content, Menu, NewNote, Search } from "./styles";
import { Header } from "../../components/header";
import { ButtonText } from "../../components/ButtonText";
import { FiPlus, FiSearch } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);

  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  function handleSelectedTags(tagName) {
    if (tagName === "all") {
      return setTagsSelected([]);
    }
    const alreadySelected = tagsSelected.includes(tagName);
    if (alreadySelected) {
      const filteredTags = tagsSelected.filter((tag) => tag !== tagName);
      setTagsSelected(filteredTags);
    } else {
      setTagsSelected((prevTags) => [...prevTags, tagName]);
    }
  }

  function handleNoteDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags");
      setTags(response.data);
    }

    fetchTags();
  }, []);

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(
        `/notes?title=${search}&tags=${tagsSelected}`
      );
      setNotes(response.data);
    }
    fetchNotes();
  }, [search, tagsSelected]);

  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText
            title="Todos"
            onClick={() => handleSelectedTags("all")}
            isActive={tagsSelected.length === 0}
          />
        </li>

        {tags &&
          tags.map((tag) => (
            <li key={String(tag.id)}>
              <ButtonText
                title={tag.name}
                onClick={() => handleSelectedTags(tag.name)}
                isActive={tagsSelected.includes(tag.name)}
              />
            </li>
          ))}
      </Menu>

      <Search>
        <Input
          icon={FiSearch}
          type="text"
          placeholder="Encontre uma anotação"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Search>

      <Content>
        <Section title="Minhas notas">
          {notes &&
            notes.map((note) => (
              <Note
                key={String(note.id)}
                data={note}
                onClick={() => handleNoteDetails(note.id)}
              />
            ))}
        </Section>
      </Content>

      <NewNote to={-1}>
        <FiPlus />
        <span>Nova nota</span>
      </NewNote>
    </Container>
  );
}
