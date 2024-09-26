import Card from './Card';
import './CardContainer.css';

const CardContainer = ({ cards }) => {
  return (
    /* Conditionally render cards if the array is not empty */
    <div className="cards-container">
      {cards.length === 0 ?
      ( <p>Click "New Game" to start!</p> ) :
      cards.map((card) => (
        <Card
          key={card.id}
          frontImage={card.src}
          backImage="/img/cover.png"
          label={card.label}
          percentage={card.percentage}
        />
      ))}
    </div>
  );
};

export default CardContainer;