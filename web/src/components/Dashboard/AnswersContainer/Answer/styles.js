import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-width: 3px;
  border-style: solid;
  align-self: center;
  border-color: ${(props) => (props.accepted ? '#004e00' : '#000')};
  background: ${(props) => props.accepted && '#ebffeb'};
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;

  div#owner {
    display: flex;
    justify-content: flex-end;
    align-content: center;
    align-items: center;

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

  div#answerBody {
    display: flex;
    flex-direction: column;
    padding: 0 5px;

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

      @media (max-width: 500px) {
        font-size: 80%;
      }
    }
  }
`;
