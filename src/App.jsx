// src/App.jsx
import { useState } from 'react';
import './App.css';
import cardData from './cards.json'; // Import JSON data
import Header from './components/Header';
import CardContainer from './components/CardContainer';

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  // Shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardData, ...cardData]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setTurns(0);
  };

  return (
    <div className="App">
      <Header shuffleCards={shuffleCards} />
      <CardContainer cards={cards} />
    </div>
  );
}

export default App;
