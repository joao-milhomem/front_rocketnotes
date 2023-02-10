import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border-radius: 10px;

  > svg {
    margin-left: 16px;
  }

  > input {
    height: 56px;
    width: 100%;
    padding: 12px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;
