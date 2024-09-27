import Card from './Card';
import './CardContainer.css';

const CardContainer = ({ cards, handleChoice, choiceOne, choiceTwo, disabled }) => {
  return (
    <div className="cards-container">
      {cards.length === 0 ? (
        <p>Click "New Game" to start!</p>
      ) : (
        cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            frontImage={card.src}
            backImage="/img/cover.png"
            label={card.label}
            percentage={card.percentage}
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
