import { useState } from "react";
import Card from "../components/Card/Card";
import Form from "../components/Form/Form";
import Header from "../components/Header.js/Header";

export default function HomePage() {
  const [card, setCard] = useState([]);

  const handleGetData = (inputValues) => {
    setCard([inputValues, ...card]);
  };

  function handleDelete(id) {
    setCard(card.filter((unoCard) => unoCard.key !== id));
  }

  function onEditSave(key, newContent, newAuthor) {
    console.log(key, newContent, newAuthor);
    setCard(
      card.map((item) => {
        if (item.key === key) {
          return {
            key: key,
            inputThoughts: newContent,
            inputAuthor: newAuthor,
          };
        } else {
          return item;
        }
      })
    );
  }

  return (
    <div>
      <Header />
      <Card card={card} onHandleDelete={handleDelete} onEditSave={onEditSave} />
      <Form getData={handleGetData} />
    </div>
  );
}
