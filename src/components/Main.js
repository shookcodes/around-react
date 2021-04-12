import React, { useState, useEffect } from "react";
import api from "../utils/Api.js";
import Card from "./Card.js";
import "../index.css";

export default function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  const getUserData = useEffect(() => {
    api
      .getUserInfo()
      .then((user) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
      })
      .catch((err) => console.log(err));
    }, []);
      const getCardData = useEffect(() => {
     api
      .getCardList()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => console.log(err));
  }, []);

  Promise.all([getUserData, getCardData])

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
            style={{ backgroundImage: `url(${userAvatar})` }}
          />
        </div>
        <div className="profile__info">
          <div className="profile__name-info">
            <h1 className="profile__name" id="name">
              {userName}
            </h1>
            <button
              className="btn btn_style_edit-profile"
              type="button"
              aria-label="Edit profile"
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="profile__title">{userDescription}</p>
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
            card={card}
            key={card._id}
            link={card.link}
            name={card.name}
            selectedCard={props.card}
            onCardClick={props.onCardClick}
          />
        ))}
      </section>
    </>
  );
}
