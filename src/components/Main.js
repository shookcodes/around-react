import React, { useState, setState, useEffect } from "react";
import api from "../utils/Api.js";
import Card from "./Card.js";

import "../index.css";

export default function Main(props) {
  const [cards, setCards] = useState([]);

  const getCardData = useEffect(() => {
    api
      .getCardList()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => console.log(err));
  }, []);

  Promise.all([getCardData]);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === props.id);
    let updateLike = null;
    
    if (isLiked === false) {
      updateLike = api.addCardLike(card._id);
    } else {
      updateLike = api.removeCardLike(card._id);
    }
    updateLike.then((newCard) => {
      const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
      setCards(newCards);
    });
  }

  //const [newCards, setNewCards] = useState([...cards]);
  //console.log(cards)

  function handleDeleteClick(card) {
    console.log("got here")
    let index = cards.indexOf(card);
   // console.log(newCards)
    

  }

  return (
    <>
      <section className="profile">
        <div className="profile__avatar-container">
          <button
            className="profile__avatar-edit"
            type="button"
            aria-label="Edit Avatar"
            onClick={props.onEditAvatar}
          ></button>
          <div
            className="profile__avatar"
            alt="Profile picture"
            style={{ backgroundImage: `url(${props.avatar})` }}
          />
        </div>
        <div className="profile__info">
          <div className="profile__name-info">
            <h1 className="profile__name" id="name">
              {props.name}
            </h1>
            <button
              className="btn btn_style_edit-profile"
              type="button"
              aria-label="Edit profile"
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="profile__title">{props.about}</p>
        </div>
        <button
          className="btn btn_style_add"
          type="button"
          aria-label="Add location"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="cards">
        {cards.map((card) => (
          <Card
            currentUser={props.id}
            card={card}
            key={card._id}
            link={card.link}
            name={card.name}
            selectedCard={props.card}
            onCardClick={props.onCardClick}
            onCardLike={handleCardLike}
            handleLikeClick={card.onCardLike}
            onCardDelete={handleDeleteClick}
            handleDeleteClick={card.onCardDelete}
          />
        ))}
      </section>
    </>
  );
}
