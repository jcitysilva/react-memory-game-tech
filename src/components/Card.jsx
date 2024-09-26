import './Card.css';

const Card = ({ frontImage, backImage, label, percentage }) => {
    return (
      <div className="card">
        <img className="card-front" src={frontImage} alt={label} />
        <div className="card-info">
          <p className="language-name">{label}</p>
          <p className="percentage">{percentage}</p>
        </div>
        <img className="card-back" src={backImage} alt="card back" />
      </div>
    );
  };
  
  export default Card;
  