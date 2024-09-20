import { useState } from 'react';
import './App.css';

const cardImages = [
  { src: "/img/bash.png" },
  { src: "/img/cover.png" },
  { src: "/img/htmlcss.png" },
  { src: "/img/javascript.png" },
  { src: "/img/python.png" },
  { src: "/img/sql.png" },
  { src: "/img/ts.png" }
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

      {/* Conditionally render cards if the array is not empty */}
      <div className="cards-container">
        {cards.length === 0 ? (
          <p>Click "New Game" to start!</p>
        ) : (
          cards.map((card) => (
            <div className="card" key={card.id}>
              <img src={card.src} alt="card" />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
