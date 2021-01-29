import "./App.css";
import { useState, useEffect } from "react";
import uniqid from "uniqid";
import Header from "./components/Header";
import Card from "./components/Card";
import cheddar from "./assets/cheddar.jpeg";
import swiss from "./assets/swiss.jpeg";
import american from "./assets/american.jpeg";
import colby from "./assets/colby.jpeg";
import mozz from "./assets/mozz.jpeg";
import parm from "./assets/parmesan.jpeg";
import bleu from "./assets/bleu.jpeg";
import brie from "./assets/brie.jpeg";
import pepperjack from "./assets/pepperjack.webp";

function App() {
  const [highScore, setHighScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  return (
    <>
      <div className="bg-img" />
      <div className="score">
        <h3 className="score-high">High-score: {highScore}</h3>
        <h3 className="score-current">Current score: {currentScore}</h3>
      </div>
      <div className="cards">
        <Card imgSrc={cheddar} name="cheddar" />
        <Card imgSrc={swiss} name="swiss" />
        <Card imgSrc={american} name="american" />
        <Card imgSrc={mozz} name="mozz" />
        <Card imgSrc={colby} name="colby" />
        <Card imgSrc={parm} name="parmesan" />
      </div>
    </>
  );
}

export default App;
