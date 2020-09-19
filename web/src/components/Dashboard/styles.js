import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Grandstander:ital,wght@0,200;0,300;0,400;0,500;1,300&display=swap');

  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  min-height: 30px;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  background-color: #222;
  padding: 10px;

  div.buttons {
    display: flex;

    @media (max-width: 500px) {
      flex-direction: column;
    }

    button {
      padding: 5px 10px;
      background-color: #222;
      border: 3px solid rgba(255, 255, 255);
      color: #fff;
      font-weight: bold;
      margin-left: 10px;
      width: 90px;

      &:hover {
        background: #fff;
        color: #222;
      }

      @media (max-width: 500px) {
        font-size: 12px;
      }
    }

    button#errors {
      padding: 5px 10px;
      background-color: #ffbf00;
      border: 3px solid rgba(255, 255, 255);
      color: #000;
      font-weight: bold;

      @media (max-width: 500px) {
        margin-bottom: 5px;
      }

      &:hover {
        background: #fff;
        color: #222;
      }
    }
  }
`;

export const Logo = styled.span`
  font-family: 'Grandstander', cursive;
  font-weight: 300px;
  font-size: 22px;
  margin-bottom: 20px;
  color: #fff;

  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

export const Form = styled.div`
  display: flex;
  min-height: 200px;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;

  input {
    margin-top: 30px;
    margin-bottom: 10px;
    min-width: 280px;
    border: 3px solid rgba(0, 0, 0);
    padding: 5px 10px;

    @media (max-width: 500px) {
      min-width: 180px;
    }

    ::placeholder {
      font-size: 16px;
      text-align: center;
    }
  }

  button {
    margin-left: 5px;
    padding: 5px 10px;
    background-color: #aaa;
    border: 3px solid rgba(0, 0, 0);
    color: #222222;
    font-weight: bold;

    &:hover {
      background: #222;
      color: #fff;
    }
  }
`;
