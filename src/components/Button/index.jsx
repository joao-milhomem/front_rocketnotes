import { Container } from "./styles";

export function Button({ title, loading = false, ...rest }) {
  return (
    <Container title={title} type="button" disabled={loading} {...rest}>
      {loading ? "Carregando" : title}
    </Container>
  );
}
