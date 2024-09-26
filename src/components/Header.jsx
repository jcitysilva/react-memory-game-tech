import './Header.css';

const Header = ({ shuffleCards }) => {
    return (
      <div className="header">
        <h1>2024 Most Popular</h1>
        <button className='new-game' onClick={shuffleCards}>New Game</button>
      </div>
    );
  };
  
  export default Header;