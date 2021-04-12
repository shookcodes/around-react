export default function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div card={props.card} key={props.card._id} className="card">
      <button
        className="btn btn_style_delete"
        aria-label="Delete place"
      ></button>
      <div
        className="card__image"
        src="about:blank"
        alt="placeholder"
        style={{ backgroundImage: `url(${props.card.link})` }}
        onClick={handleClick}
      ></div>
      <div className="card__content">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like">
          <button
            className="btn btn_style_like"
            type="button"
            aria-label="Like location"
          ></button>
          <span className="card__like-text">0</span>
        </div>
      </div>
    </div>
  );
}
