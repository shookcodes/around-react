import React, {useContext} from "react";
import Card from "./Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

import "../index.css";

export default function Main(props) {
  const currentUser = useContext(CurrentUserContext);


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
            style={{ backgroundImage: `url(${currentUser.avatar})` }}
          />
        </div>
        <div className="profile__info">
          <div className="profile__name-info">
            <h1 className="profile__name" id="name">
              {currentUser.name}
            </h1>
            <button
              className="btn btn_style_edit-profile"
              type="button"
              aria-label="Edit profile"
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="profile__title">{currentUser.about}</p>
        </div>
        <button
          className="btn btn_style_add"
          type="button"
          aria-label="Add location"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="cards">
        {props.cards.map((card) => (
          <Card
            currentUser={props.id}
            card={card}
            key={card._id}
            link={card.link}
            name={card.name}
            selectedCard={props.card}
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
          />
        ))}
      </section>
    </>
  );
}
