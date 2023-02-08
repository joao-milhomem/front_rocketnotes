import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  display: flex;
  justify-content: space-between;

  height: 105px;
  width: 100%;
  padding: 0 80px;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  .profile {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .profile img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;
