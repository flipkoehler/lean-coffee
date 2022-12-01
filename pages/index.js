import { useState } from "react";
import Card from "../components/Card/Card";
import Form from "../components/Form/Form";
import Header from "../components/Header.js/Header";

export default function HomePage() {
  const [card, setCard] = useState([]);
  console.log(card, "card");

  // function changeCard({ inputAuthor, inputThoughts }) {
  //   setCard([{ inputAuthor, inputThoughts }]);
  // }

  const changeCard = (inputValues) => {
    setCard([...card, inputValues]);
  };

  return (
    <div>
      <Header />
      <Card card={card} />
      <Form onChangeCard={changeCard} />
    </div>
  );
}
