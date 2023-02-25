import { Container, Form } from "./styles";
import { Header } from "../../components/header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

export function New() {
  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  function handleLinks() {
    setLinks((prevLinks) => [...prevLinks, newLink]);
    setNewLink("")
    console.log(links);
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

          <Input placeholder="Título" />

          <Textarea placeholder="Observações" />

          <Section title="Links úteis">
            {links.map((link, index) => (
              <NoteItem key={index} value={link} onClick={() => {}} />
            ))}

            <NoteItem
              isNew
              placeholder="Novo link"
              onChange={(e) => setNewLink(e.target.value)}
              value={newLink}
              onClick={handleLinks}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="link.com.br" />
              <NoteItem value="link.com.br" />
              <NoteItem isNew placeholder="Novo link" />
            </div>
          </Section>
          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  );
}
