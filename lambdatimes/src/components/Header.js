import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
background-color: #fff;
border-bottom: 1px solid lightgrey;
width: 100%;
height: 120px;
margin-top: 44px;
padding-bottom: 15px;
@media (min-width: 1280px) {
  width: 1280px;
}
h1 {
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
}
`;

const Date = styled.span`
  margin-left: 20px;
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
`;

const Temp = styled.span`
  margin-left: 5px;
  margin-right: 20px;
  flex: 1;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Date>SMARCH 32, 2018</Date>
      <h1>Lambda Times</h1>
      <Temp>Your Local Temp 98°F</Temp>
    </HeaderContainer>
  )
}

export default Header