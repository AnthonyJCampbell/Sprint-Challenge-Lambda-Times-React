import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = ({ cards }) => {
  console.log(cards)
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
      {cards.map((card, idx) => {
        return (
          <Card key={idx} card={card} />
        );
      })}
    </div>
  )
}

Card.propTypes = {
  cards: PropTypes.array,
}


export default Cards;