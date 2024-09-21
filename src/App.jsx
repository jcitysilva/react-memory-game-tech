import { useState } from 'react';
import './App.css';

const cardImages = [
  { src: "/img/bash.png", name: "Bash", percentage: "33.9%" },
  { src: "/img/htmlcss.png", name: "HTML/CSS", percentage: "52.9%" },
  { src: "/img/javascript.png", name: "JavaScript", percentage: "62.3%" },
  { src: "/img/python.png", name: "Python", percentage: "51%" },
  { src: "/img/sql.png", name: "SQL", percentage: "51%" },
  { src: "/img/ts.png", name: "TypeScript", percentage: "38.5%" }
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  console.log(cards, turns);

  return (
    <div className="App">
      <h1>2024 Most Popular</h1>
      <button onClick={shuffleCards}>New Game</button>
  
      <div className="card-grid">
        {cards.length === 0 ? (
          <p className="new-game" alt="new game message">Click "New Game" to start!</p>
        ) : (
          cards.map((card) => (
            <div className="card" key={card.id}>
              <div>
                <img className="front" src={card.src} alt={card.name} />
                  <div className="card-info">
                  <p>{card.name}</p>
                  <p>{card.percentage}</p>
                <img className="back" src="/img/cover.png" alt="card back" />
                <p>% % %</p>
              </div>

              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
