import styled from "styled-components";
import { nanoid } from "nanoid";

export default function Card({ card }) {
  return (
    <>
      {" "}
      {card.map((item) => {
        return (
          <ul>
            <StyledListItem key={nanoid()}>
              <h2>{item.inputThoughts}</h2>
              <p>{item.inputAuthor}</p>
            </StyledListItem>
          </ul>
        );
      })}
    </>
  );
}

const StyledListItem = styled.li`
  border: 3px solid darkgray;
  margin: 30px 30px;
  padding: 20px;
  list-style: none;
`;
