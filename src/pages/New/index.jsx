import { Container, Form } from "./styles";
import { Header } from "../../components/header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";

export function New() {
  const navigate = useNavigate();
  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleAddLinks() {
    if (newLink == "" || newLink == undefined || newLink == null) {
      return alert("O campo está vazio");
    }
    setLinks((prevLinks) => [...prevLinks, newLink]);
    setNewLink("");
  }

  function handleRemoveLinks(deteted) {
    setLinks(links.filter((link) => link !== deteted));
  }

  function handleAddTags() {
    if (newTag == "" || newTag == undefined || newTag == null) {
      return alert("O campo está vazio");
    }
    setTags((prevTags) => [...prevTags, newTag]);
    setNewTag("");
  }

  function handleRemoveTags(deleted) {
    setTags(tags.filter((tag) => tag !== deleted));
  }

  async function handleAddNote() {
    if (title == "" || title == undefined || title == null) {
      return alert("Digite um título para sua nota!");
    }

    if (description == "" || description == undefined || description == null) {
      return alert("Digite uma descrição para sua nota!");
    }

    if (newLink) {
      return alert("Submeta o link ao formulário!");
    }

    if (newTag) {
      return alert("Submeta a tag ao formulário!");
    }
    await api.post("/notes", {
      title,
      description,
      links,
      tags,
    });

    alert("Nota cadastrada com sucesso!");
    navigate("/");
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">Voltar</Link>
          </header>

          <Input
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
          />

          <Textarea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />

          <Section title="Links úteis">
            {links.map((link, index) => (
              <NoteItem
                key={index}
                value={link}
                onClick={() => {
                  handleRemoveLinks(link);
                }}
              />
            ))}

            <NoteItem
              isNew
              placeholder="Novo link"
              onChange={(e) => setNewLink(e.target.value)}
              value={newLink}
              onClick={handleAddLinks}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {tags &&
                tags.map((tag, index) => (
                  <NoteItem
                    onClick={() => {
                      handleRemoveTags(tag);
                    }}
                    value={tag}
                    key={String(index)}
                  />
                ))}

              <NoteItem
                isNew
                placeholder="Novo link"
                onChange={(e) => setNewTag(e.target.value)}
                onClick={handleAddTags}
                value={newTag}
              />
            </div>
          </Section>
          <Button title="Salvar" onClick={handleAddNote} />
        </Form>
      </main>
    </Container>
  );
}
