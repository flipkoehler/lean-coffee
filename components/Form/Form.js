import { nanoid } from "nanoid";

export default function Form({ getData }) {
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="thoughts">Type your thoughts</label>
        <input id="thoughts" name="thoughts" required></input>
        <label htmlFor="author">Your name</label>
        <input id="author" name="author" required></input>
        <button type="submit">+</button>
      </fieldset>
    </form>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const inputThoughts = event.target.thoughts.value;
    const inputAuthor = event.target.author.value;
    const key = nanoid();
    const inputObject = { inputAuthor, inputThoughts, key };
    console.log(inputObject);

    getData(inputObject);
    event.target.reset();
  }
}
