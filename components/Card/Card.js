import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";

export default function Card({ card, onHandleDelete }) {
  return (
    <>
      {card.map((item) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <ul key={item.key}>
            <StyledListItem>
              <h2>{item.inputThoughts}</h2>
              <p>{item.inputAuthor}</p>
              <button onClick={() => onHandleDelete(item.key)}>
                <FaTrashAlt />
              </button>
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
