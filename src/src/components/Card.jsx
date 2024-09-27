import './Card.css';

export default function Card({ frontImage, backImage, label, percentage, card, handleChoice, flipped }) {
  
  const handleClick = () => {
    if (!flipped) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      {flipped ? (
        <>
          <img className="card-front" src={frontImage} alt={label} />
          <div className="card-info">
            <p className="language-name">{label}</p>
            <p className="percentage">{percentage}</p>
          </div>
        </>
      ) : (
        <img
          className="card-back"
          src={backImage}
          onClick={handleClick}
          alt="card back"
        />
      )}
    </div>
  );
}
