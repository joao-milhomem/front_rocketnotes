import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > header {
    width: 100%;
    height: 144px;

    display: flex;
    align-items: center;
    padding: 0 124px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 24px;
    }
  }
`;

export const Form = styled.form`
  max-width: 340px;
  margin: 30px auto;

  >div:nth-last-child(3){
    margin-top: 24px;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -130px auto 32px;
  text-align: center;

  > img {
    border-radius: 50%;

    width: 186px;
    height: 186px;
  }

  label {
    position: absolute;
    bottom: 15px;
    right: 80px;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;

    background-color: orange;
    border-radius: 50%;
    cursor: pointer;

    svg {
      color: black;

      height: 20px;
      width: 20px;
    }
  }

  > input {
    display: none;
    visibility: hidden;
  }
`;
