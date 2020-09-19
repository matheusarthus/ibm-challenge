import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
  align-items: center;

  div#delete {
    display: flex;
    background-color: #ddd;
    padding: 5px;

    button {
      background: none;
      border: none;
    }
  }
`;

export const Question = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  background-color: #fff;
  border-width: 3px;
  border-style: solid;
  border-color: ${(props) => (props.hasAnswer ? '#004e00' : '#000')};
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;

  @media (max-width: 720px) {
    width: 95%;
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
