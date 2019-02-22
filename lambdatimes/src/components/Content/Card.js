import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.card.img} alt="He's such a good boy!"/>
        </div>
        <span>By {props.card.author}</span>
      </div>
    </div>
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
