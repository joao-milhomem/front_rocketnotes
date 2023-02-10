import { FiPlus, FiX } from "react-icons/fi";
import { Input } from "../Input";
import { Container } from "./styles";

export function NoteItem({ isNew, value, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input value={value} {...rest} type="text" readOnly={!isNew} />

      <button type="button" onClick={onClick}>
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}
