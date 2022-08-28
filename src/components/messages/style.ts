import styled from "styled-components";

export const S_MESSAGE = styled.div`
  box-shadow: 0px 0px 2px 1px #888;
  border-radius: 0.5rem;
  padding: 0.7rem 1rem;
  max-width: 70%;
  height: fit-content;

  div {
    padding: 0;
    display: flex;
    max-width: 100%;
    justify-content: space-between;

    div {
      display: flex;
      gap: 1rem;
    }
  }

  img {
    max-width: 100%;
  }

  svg {
    cursor: pointer;
  }

  @media screen and (max-width: 920px) {
    max-width: 80%;
  }
`;
