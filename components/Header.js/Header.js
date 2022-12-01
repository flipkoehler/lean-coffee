import styled from "styled-components";

export default function Header() {
  return (
    <>
      <StyledHeading>Lean Coffee Magic Site</StyledHeading>
    </>
  );
}

const StyledHeading = styled.h1`
  color: black;
  background-color: aliceblue;
  text-align: center;
  padding: 15px;
`;
