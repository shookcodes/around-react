import React, {useState} from 'react'
import Header from "./Header.js"
import Main from "./Main.js"
import Footer from "./Footer.js"
import PopupWithForm from "./PopupWithForm.js"
import ImagePopup from "./ImagePopup"
import Input from "./Input.js"
import "../index.css"

function App (props) {

 const [isOpen, setIsOpen] = useState(false)
 const [name, setName] = useState(null)
 const [title, setTitle] = useState(null)
 const [placeholder, setPlaceholder] = useState(null)
 const [ariaLabel, setAriaLabel] = useState(null)

 const[selectedCard, setSelectedCard] = useState("")

function handleCardClick(card) {
  setSelectedCard(card)
}

 function closeAllPopups() {
  setIsOpen(false)
  setSelectedCard("")
 }

  function isEditAvatarPopupOpen () {
    setTitle("Change profile picture")
    setName("avatar")
    setIsOpen(true)
    setPlaceholder("Avatar URL")
    setAriaLabel("Update avatar")


  }

  function EditAvatarInput() {
    return (
      <Input 
       name="avatar"
       class="avatar-image"
       type="url"
       placeholder="Avatar URL"
       minLength="1" />
    )
  }

  
  function handleEditAvatarClick() {
    isEditAvatarPopupOpen();


  }

  function isEditProfilePopupOpen() {
    setTitle("Edit profile")
    setName("profile")
    setIsOpen(true)
    //setPlaceholder("Avatar URL")
    setAriaLabel("Save Profile")
  }

  function EditProfileInputs() {
    return (
      <>
      <Input 
       name="user-name"
       class="user-name"
       type="text"
       placeholder="Name"
       minLength="2"
       maxLength="40" />
       <Input 
       name="about-me"
       class="about-me"
       type="text"
       placeholder="About Me"
       minLength="2"
       maxLength="200" />
       </>
    )
  }

  function handleEditProfileClick() {
    isEditProfilePopupOpen()
  }

  function isAddPlacePopupOpen() {
    setTitle("New Place")
    setName("place")
    setIsOpen(true)
    setAriaLabel("Create Place")
  }

  function AddPlaceInputs() {
    return (
      <>
      <Input 
       name="place-name"
       class="place-name"
       type="text"
       placeholder="Title"
       minLength="1"
       maxLength="30" />
       <Input 
       name="place-link"
       class="place-link"
       type="url"
       placeholder="Image link"
       />
       </>
    )
  }

  function SwitchCase() {
    console.log(name)
    switch(name) {
      case "avatar": 
        return <EditAvatarInput/>;
        case "profile": 
        return <EditProfileInputs/>
        case "place": 
        return <AddPlaceInputs/>
      default:  return ""

    }
  }

  function handleAddPlaceClick() {
    isAddPlacePopupOpen()
  }


  return (
    <div className="page">
    <Header />
    <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} />
   <Footer />
   <ImagePopup selectedCard={selectedCard} card={props.card} name={props.name} link={props.link} onClose={closeAllPopups} />
   <PopupWithForm isOpen={isOpen} onClose={closeAllPopups} name={name} title={title} placeholder={placeholder} ariaLabel={ariaLabel} >
   {isOpen ? <SwitchCase/> : null}
   
    </PopupWithForm>



  </div>
  );
}



export default App;
