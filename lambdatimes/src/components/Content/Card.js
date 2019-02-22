import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StyledCard from './StyledComponents/StyledCard';
import StyledAuthor from './StyledComponents/StyledAuthor';

const Headline = styled.div`
  font-size: 25px;
  font-family: Didot, serif;
`;


const Card = props => {
  return (
    <StyledCard>
      <Headline>{props.card.headline}</Headline>
      <StyledAuthor>
        <div>
          <img src={props.card.img} alt="He's such a good boy!"/>
        </div>
        <span>By {props.card.author}</span>
      </StyledAuthor>
    </StyledCard>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  card: PropTypes.objectOf({
    author: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired, 
    img: PropTypes.string.isRequired,
    tab: PropTypes.string.isRequired,
  }).isRequired,
}

export default Card;
