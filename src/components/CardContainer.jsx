import Card from './Card';
import './CardContainer.css';

const CardContainer = ({ cards, handleChoice, choiceOne, choiceTwo, disabled }) => {
  return (
    <div className="card-container">
      {cards.length === 0 ? (
        <p>Click "New Game" to start!</p>
      ) : (
        cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))
      )}
    </div>
  );
};

export default CardContainer;