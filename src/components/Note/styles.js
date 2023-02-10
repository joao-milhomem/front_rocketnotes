import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  padding: 22px;
  margin-bottom: 36px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-radius: 10px;
  border: none;

  h2 {
    margin: 0;

    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  footer {
    width: 100%;
    display: flex;
  }
`;
