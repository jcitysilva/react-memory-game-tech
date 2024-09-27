import './Header.css';

const Header = ({ shuffleCards, turns }) => {
    return (
      <div className="header">
        <h1> <a href="https://survey.stackoverflow.co/2024/technology" target="_blank" rel="noopener noreferrer"> 2024 Most Popular </a></h1>
        {/* Display the turn counter */}
        <p>Turns: {turns}</p>
        <button className='new-game' onClick={shuffleCards}>New Game</button>
      </div>
    );
  };
  
export default Header;
