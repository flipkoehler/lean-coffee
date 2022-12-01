import { useState } from "react";
import Card from "../components/Card/Card";
import Form from "../components/Form/Form";
import Header from "../components/Header.js/Header";

export default function HomePage() {
  const [card, setCard] = useState([]);

  const changeCard = (inputValues) => {
    setCard([inputValues, ...card]);
  };

  function handleDelete(id) {
    console.log(id);
    console.log(card);
    setCard(card.filter((unoCard) => unoCard.key !== id));
  }

  return (
    <div>
      <Header />
      <Card card={card} onHandleDelete={handleDelete} />
      <Form onChangeCard={changeCard} />
    </div>
  );
}
