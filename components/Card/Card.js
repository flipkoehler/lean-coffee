import styled from "styled-components";
import { data } from "../../lib/data";

export default function Card({ card }) {
  return (
    <>
      {" "}
      {card.map((item) => {
        return (
          <>
            <StyledSection>
              <h2>{item.inputThoughts}</h2>
              <p>{item.inputAuthor}</p>
            </StyledSection>
          </>
        );
      })}
    </>
  );
}

const StyledSection = styled.section`
  border: 3px solid darkgray;
  margin: 30px 30px;
  padding: 20px;
`;
