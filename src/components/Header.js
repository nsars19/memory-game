const Header = (props) => {
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
