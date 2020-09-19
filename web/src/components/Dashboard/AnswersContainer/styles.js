import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-width: 3px;
  border-style: solid;
  align-self: center;
  border-color: ${(props) => (props.hasAnswer ? '#004e00' : '#000')};
  width: 60%;
  padding: 10px;
  margin-bottom: 10px;

  span#noAnswers {
    margin-top: 20px;
    margin-bottom: 20px;
    align-self: center;
    font-family: 'Grandstander', cursive;
  }

  div#header {
    display: flex;
    justify-content: space-between;

    @media (max-width: 500px) {
      flex-direction: row;
    }

    div#titles {
      flex-direction: column;

      div#owner {
        display: flex;
        justify-content: flex-start;
        align-content: center;
        align-items: center;

        @media (max-width: 500px) {
          flex-direction: row;
        }

        img {
          width: 42px;
          height: 42px;
          margin-right: 10px;
        }

        div {
          display: flex;
          flex-direction: column;
          align-content: center;
          align-items: center;
      }

    div#reputation {
      display: flex;
      align-content: center;
      align-items: center;
      flex-direction: row;

      span {
        margin-left: 5px;
        font-size: 12px;
      }
    }
  }
    }

    div#buttons {
      display: flex;
      align-content: center;
      align-items: center;
      flex-direction: column;

      button#back {
        padding: 5px 10px;
        background-color: #fff;
        border: 3px solid rgba(0, 0, 0);
        color: #222;
        font-weight: bold;
        margin-left: 10px;
        width: 90px;
        margin-bottom: 5px;

        &:hover {
          background: #f00;
          color: #fff;
        }

        @media (max-width: 500px) {
          font-size: 12px;
        }
      }
    }

    button#save {
        padding: 5px 10px;
        background-color: #fff;
        border: 3px solid rgba(0, 0, 0);
        color: #222;
        font-weight: bold;
        margin-left: 10px;
        width: 90px;

        &:hover {
          background: #008900;
          color: #fff;
        }

        @media (max-width: 500px) {
          font-size: 12px;
        }
      }
    }
  }

  @media (max-width: 720px) {
    width: 90%;
  }

  h4 {
    font-size: 16px;
    font-weight: bold;
  }

  a {
    font-size: 12px;
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
    margin-bottom: 5px;

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

  div.dates {
    margin-bottom: 10px;
  }

  div#body {
    display: flex;
    flex-direction: column;
    background-color: #ddd;
    padding: 10px;
    margin-bottom: 10px;

    div {
      display: flex;
      flex-direction: column;
    }

    pre {
      display: flex;
      flex-direction: column;
    }

    img {
      width: 95%;
      margin-bottom: 5px;
      margin-top: 5px;
    }

    h1,
    h2,
    h3,
    h4 {
      margin-bottom: 3px;
      margin-top: 10px;
    }

    blockquote {
      text-indent: 20px;
      border-left-width: 2px;
      border-left-style: solid;
      margin-top: 10px;
    }

    ol {
      padding: 20px;
    }

    p {
      margin-top: 1em;
      margin-bottom: 1em;
    }

    code {
      white-space: pre-wrap;
      color: #00f;
      background-color: #f1f1f1;
    }
  }
`;
