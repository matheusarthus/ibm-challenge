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
  background-color: #222;
  padding: 10px;

  button {
    padding: 5px 10px;
    background-color: #222;
    border: 3px solid rgba(255, 255, 255);
    color: #fff;
  }
`;

export const Logo = styled.span`
  font-family: 'Grandstander', cursive;
  font-weight: 300px;
  font-size: 22px;
  margin-bottom: 20px;
  color: #fff;
`;

export const Form = styled.form``;
