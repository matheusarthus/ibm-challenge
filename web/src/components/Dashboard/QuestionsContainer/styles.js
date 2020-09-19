import styled from 'styled-components';

export const Container = styled.div`
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
