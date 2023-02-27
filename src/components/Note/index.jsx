import { Container } from "./styles";
import { Tag } from "../../components/Tag";

export function Note({ data, ...rest }) {
  return (
    <Container type="button" {...rest}>
      <h2>{data.title}</h2>
      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag title={tag.name} key={tag.id} />
          ))}
        </footer>
      )}
    </Container>
  );
}
