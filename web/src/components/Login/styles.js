import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Grandstander:ital,wght@0,200;0,300;0,400;0,500;1,300&display=swap');

  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Ilustration = styled.img`
  max-width: 200px;
  max-height: 200px;
  margin-bottom: 10px;
`;

export const Logo = styled.span`
  font-family: 'Grandstander', cursive;
  font-weight: 300px;
  font-size: 22px;
  margin-bottom: 20px;
`;

export const GoogleButton = styled.button`
  display: flex;
  justify-content: center;
  padding: 10px 20px;
  min-width: 220px;
  margin-bottom: 10px;
  background-color: #fff;
  border: 3px solid rgba(0, 0, 0);

  span {
    margin-left: 10px;
  }
`;

export const TwitterButton = styled.button`
  display: flex;
  justify-content: center;
  padding: 10px 20px;
  min-width: 220px;
  margin-bottom: 10px;
  background-color: #1da1f2;
  border: 3px solid rgba(0, 0, 0);

  span {
    margin-left: 10px;
    color: #fff;
  }
`;

export const FacebookButton = styled.button`
  display: flex;
  justify-content: center;
  padding: 10px 20px;
  min-width: 220px;
  margin-bottom: 10px;
  background-color: #1277b5;
  border: 3px solid rgba(0, 0, 0);

  span {
    margin-left: 10px;
    color: #fff;
  }
`;

export const LinkedinButton = styled.button`
  display: flex;
  justify-content: center;
  padding: 10px 20px;
  min-width: 200px;
  background-color: #1277b5;
  border: 3px solid rgba(0, 0, 0);

  span {
    margin-left: 10px;
    color: #fff;
  }
`;
