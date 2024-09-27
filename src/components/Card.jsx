import React from 'react';
import './Card.css';

const Card = React.memo(function Card({ card, handleChoice, flipped, disabled }) {
  const { src: frontImage, label, percentage } = card;

  const handleClick = () => {
    if (!flipped && !disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card" aria-label={`Programming language ${label}`} tabIndex="0">
      {flipped ? (
        <>
          <img className="card__front" src={frontImage} alt={label} />
          <div className="card__info">
            <p className="card__label">{label}</p>
            <p className="card__percentage">{percentage}</p>
          </div>
        </>
      ) : (
        <img
          className={`card__back ${disabled ? 'card__back--disabled' : ''}`}
          src="/img/cover.png"
          onClick={handleClick}
          alt="card back"
          aria-label="Flip card"
          tabIndex="0"
        />
      )}
    </div>
  );
});

export default Card;