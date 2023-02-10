import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;

  background-color: ${({ theme, isNew }) =>
    isNew ? "none" : theme.COLORS.BACKGROUND_900};

  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

  > input {
    height: 56px;
    width: 100%;
    padding: 12px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > button {
    border: none;
    background: none;

    svg {
      font-size: 16px;
      color: ${({ theme, isNew }) =>
        isNew ? theme.COLORS.ORANGE : theme.COLORS.RED};
    }
  }
`;
