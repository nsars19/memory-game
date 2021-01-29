import { useState, useEffect } from "react";

const Header = (props) => {
  const [animationName, setAnimationName] = useState("changeColor");
  const [iconStyle, setIconStyle] = useState("grid");
  const [textStyle, setTextStyle] = useState("none");

  useEffect(() => {
    if (props.highScore === 0) return;

    const highScore = document.querySelector(".score-high");
    highScore.style.animationName = animationName;
    
    const newName = animationName === "changeColor" ? "changeColor2" : "changeColor";

    setAnimationName(newName);
  }, [props.highScore]);

  const showHelp = () => {
    const help = document.getElementById("help");
    const helpIcon = document.querySelector(".help-icon");
    const helpText = document.querySelector(".help-text");

    setIconStyle(iconStyle === "grid" ? "none" : "grid");
    setTextStyle(textStyle === "none" ? "block" : "none");

    helpIcon.style.display = iconStyle;
    helpText.style.display = textStyle;
  };

  return (
    <>
      <div className="bg-img" />
      <div id="help" className="help">
        <div className="help-icon" onClick={showHelp}><h2>?</h2></div>
        <p className="help-text" onClick={showHelp}>Select cheeses you haven't selected yet! If you pick one that you've already selected the game restarts!</p>
      </div>
      <div className="score">
        <h3 className="score-high">High-score: {props.highScore}</h3>
        <h3 className="score-current">Current score: {props.currentScore}</h3>
      </div>
    </>
  )
};

export default Header;
