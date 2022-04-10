import { useState } from "react";
import CardList from "./CardList";
import Form from "./Form";

function AppforGithub() {
    let [cards, setCards] = useState([]);

    let addNewCard = cardInfo =>{
        setCards(cards.concat(cardInfo))
    }
    return (
      <div className="App">
        <Form onSubmit={addNewCard}/>
        <CardList cards ={cards}/>
      </div>
    );
  }
  
  export default AppforGithub;