const Header = ({ shuffleCards }) => {
    return (
      <div className="header">
        <h1>2024 Most Popular</h1>
        <button onClick={shuffleCards}>New Game</button>
      </div>
    );
  };
  
  export default Header;