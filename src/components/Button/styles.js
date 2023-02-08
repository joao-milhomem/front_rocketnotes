import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 56px;
  padding: 0 16px;
  margin-top: 16px;

  border: none;
  border-radius: 10px;

  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;
