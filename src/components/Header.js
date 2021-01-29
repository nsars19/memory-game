import { useState, useEffect } from "react";

const Header = (props) => {
  const [animationName, setAnimationName] = useState("changeColor");

  useEffect(() => {
    if (props.highScore === 0) return;

    const highScore = document.querySelector(".score-high");
    highScore.style.animationName = animationName;
    
    const newName = animationName === "changeColor" ? "changeColor2" : "changeColor";

    setAnimationName(newName);
  }, [props.highScore]);

  return (
    <>
      <div className="bg-img" />
      <div className="score">
        <h3 className="score-high">High-score: {props.highScore}</h3>
        <h3 className="score-current">Current score: {props.currentScore}</h3>
      </div>
    </>
  )
};

export default Header;
