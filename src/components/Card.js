const Card = (props) => {
  return (
    <div className="card" onClick={props.onClick.bind(this, props.name)}>
      <div className="card-img">
        <img src={props.imgSrc} />
      </div>
      <h3>{props.name}</h3>
    </div>
  )
};

export default Card;
