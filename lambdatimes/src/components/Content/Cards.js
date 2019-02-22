import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from './Card';

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: none;
  flex-direction: row;
  width: 100%;
  margin-top: 16px;
  flex-wrap: wrap;
  
  @media (min-width: 1200px) {
    .cards-container {
      width: 1200px;
    }
`;

const Cards = ({ cards }) => {
  return (
    <CardsContainer>
      {cards.map(card => <Card key={card.headline} card={card} tab={card.tab} />)}
    </CardsContainer>
  )
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.objects)
}

export default Cards;
