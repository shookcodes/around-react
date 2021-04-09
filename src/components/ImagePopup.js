export default function ImagePopup (card) {
  const setCard = card.selectedCard
 
    return (
        <div className={`popup popup_style_image ${card.selectedCard ? 'popup_opened' : ''}`}>
        <div className="popup__image-container">
          <button className="btn btn_style_close btn_style_close-image" onClick={card.onClose}></button>
          <figure className="popup__figure">
            <img className="popup__image" src={card.selectedCard ? setCard.link : "about:blank"} alt={setCard.name} />
            <figcaption className="popup__caption">{setCard.name}</figcaption>
          </figure>
        </div>
      </div>
    )
}