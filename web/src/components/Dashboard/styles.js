import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Grandstander:ital,wght@0,200;0,300;0,400;0,500;1,300&display=swap');

  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Header = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Grandstander:ital,wght@0,200;0,300;0,400;0,500;1,300&display=swap');

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

export const QuestionsContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Grandstander:ital,wght@0,200;0,300;0,400;0,500;1,300&display=swap');

  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;

  div#noAnswers {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;

    strong {
      font-family: 'Grandstander', cursive;
      margin-bottom: 20px;
    }

    img {
      max-width: 180px;
      max-height: 180px;
      border: 3px solid rgba(0, 0, 0);
    }
  }

  div#containerPagination {
    display: flex;
    align-content: center;
    align-items: center;
    margin-bottom: 10px;

    span {
      margin-left: 5px;
      margin-right: 5px;
      font-size: 16px;
    }

    button.pagination {
      background: none;
      border: none;
    }
  }
`;

export const Question = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-width: 3px;
  border-style: solid;
  border-color: ${(props) => (props.hasAnswer ? '#004e00' : '#000')};
  width: 60%;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;

  @media (max-width: 720px) {
    width: 90%;
  }

  &:hover {
    background: ${(props) => (props.hasAnswer ? '#008900' : '#888')};
    color: #fff;
  }

  h4 {
    font-size: 16px;
    font-weight: bold;
  }

  div {
    display: flex;
    margin-top: 5px;

    @media (max-width: 500px) {
      flex-direction: column;
    }

    div#metrics {
      display: flex;
      flex-direction: row;
      align-content: center;
      align-items: center;
    }

    strong {
      font-size: 12px;
      font-weight: bold;
    }

    span {
      margin-left: 2px;
      margin-right: 10px;
    }
  }

  div.tags {
    display: flex;
    margin-bottom: 10px;

    @media (max-width: 500px) {
      flex-direction: column;
    }

    div#tag {
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      background-color: #1da1f2;
      margin-right: 5px;
      color: #fff;
      padding: 3px;
    }
  }
`;

export const AnswersContainer = styled.div``;

export const Answers = styled.div``;
