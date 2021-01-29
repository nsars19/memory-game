import "./App.css";
import { useState, useEffect } from "react";
import uniqid from "uniqid";
import Header from "./components/Header";
import Card from "./components/Card";
import Loading from "./components/Loading";
import cheddar from "./assets/cheddar.jpeg";
import swiss from "./assets/swiss.jpeg";
import american from "./assets/american.jpeg";
import colby from "./assets/colby.jpeg";
import mozz from "./assets/mozz.jpeg";
import parm from "./assets/parmesan.jpeg";
import bleu from "./assets/bleu.jpeg";
import brie from "./assets/brie.jpeg";
import pepperjack from "./assets/pepperjack.webp";
import gouda from "./assets/gouda.jpeg";
import gruyere from "./assets/gruyere.jpeg";
import camembert from "./assets/camembert.jpeg";
import jarlsberg from "./assets/jarlsberg.jpeg";
import tilsit from "./assets/tilsit.jpeg";
import lambert from "./assets/lambert.jpeg";
import roquefort from "./assets/roquefort.jpeg";
import mascarpone from "./assets/mascarpone.webp";
import feta from "./assets/feta.jpeg";

function App() {
  const [highScore, setHighScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [currentDeck, setCurrentDeck] = useState(null);
  const [guessList, setGuessList] = useState([]);

  useEffect(() => {
    buildDeck();
  }, [guessList]);

  useEffect(() => {
    document.title = "Memory Cheese";
  }, []);

  const isDeckSet = () => !!currentDeck;

  const buildDeck = () => {
    let cheeses = [
      [gouda, "gouda"],
      [gruyere, "gruyere"],
      [camembert, "camembert"],
      [jarlsberg, "jarlsberg"],
      [tilsit, "tilsit"],
      [lambert, "lambert"],
      [roquefort, "roquefort"],
      [mascarpone, "mascarpone"],
      [feta, "feta"],
      [cheddar, "cheddar"],
      [swiss, "swiss"],
      [american, "american"],
      [colby, "colby"],
      [mozz, "mozzarella"],
      [parm, "parmesan"],
      [bleu, "bleu"],
      [brie, "brie"],
      [pepperjack, "pepperjack"],
    ];

    const selectedCheeses = [];
    for (let i = 0; i < 6; i++) {
      const idx = Math.floor(Math.random() * cheeses.length);
      const [imgSrc, name] = cheeses.splice(idx, 1)[0];

      selectedCheeses.push(
        <Card imgSrc={imgSrc} name={name} key={uniqid()} onClick={handleClick}/>
      );
    }

    setCurrentDeck(selectedCheeses);
  };

  const handleClick = (name) => {
    if (guessList.includes(name)) {
      setHighScore(currentScore);
      setCurrentScore(0);
      setGuessList([]);

      return
    }

    setCurrentScore(currentScore + 1)
    setGuessList([...guessList, name])
  }

  if (!isDeckSet()) {
    return (
      <>
        <Header highScore={highScore} currentScore={currentScore} />
        <Loading />
      </>
    );
  } else {
    return (
      <>
        <Header highScore={highScore} currentScore={currentScore} />
        <div className="cards">{currentDeck}</div>
      </>
    );
  }
}

export default App;
