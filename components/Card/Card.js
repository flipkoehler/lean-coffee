import styled from "styled-components";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { useState } from "react";

export default function Card({ card, onHandleDelete, onEditSave }) {
  const [edit, setEdit] = useState(true);

  return (
    <>
      {card.map((item) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <ul key={item.key}>
            <StyledListItem>
              <h2>{item.inputThoughts}</h2>
              <input
                placeholder={item.inputThoughts}
                id="editFieldThoughts"
                name="editFieldThoughts"
                hidden={edit}
              ></input>
              <p>{item.inputAuthor}</p>
              <input
                placeholder={item.inputAuthor}
                id="editFieldAuthor"
                name="editFieldAuthor"
                hidden={edit}
              ></input>
              <button
                type="submit"
                hidden={edit}
                onClick={() =>
                  onEditSave(
                    item.key,
                    editFieldThoughts.value,
                    editFieldAuthor.value
                  )
                }
              >
                save
              </button>

              <button onClick={() => onHandleDelete(item.key)}>
                <FaTrashAlt />
              </button>
              <button onClick={() => setEdit(!edit)}>
                <FaEdit />
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
