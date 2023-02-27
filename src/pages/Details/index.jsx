import { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { api } from "../../services/api";
import { Container, List, Content } from "./styles";

export function Details() {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState("");

  function handleBack() {
    navigate("/");
  }
  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, []);

  return (
    <Container>
      <Header />

      {data && (
        <main>
          <Content>
            <ButtonText title="Excluir nota" />

            <h1>{data.title}</h1>
            <p>{data.description}</p>

            {data.links && (
              <Section title="Links úteis">
                <List>
                  {data.links.map((link) => (
                    <li key={String(link.id)}>
                      <a target="_blank" href={link.url}>{link.url} </a>
                    </li>
                  ))}
                </List>
              </Section>
            )}

            {data.tags && (
              <Section title="Marcadores">
                {data.tags.map((tag) => (
                  <Tag title={tag.name} key={String(tag.id)} />
                ))}
              </Section>
            )}

            <Button title="Voltar" onClick = {handleBack} />
          </Content>
        </main>
      )}
    </Container>
  );
}
