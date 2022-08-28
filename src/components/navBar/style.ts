import styled from "styled-components";

export const S_NAV = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 15vh;
  background-color: #111;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  position: sticky;
  top: 0;
  z-index: 1;

  svg {
    height: 3rem;
    width: 3rem;
    cursor: pointer;
    transition: 0.6s all;
    color: #999;
  }

  svg:hover {
    transform: scale(1.3);
    filter: brightness(1.7);
  }

  ul {
    display: flex;
    gap: 1rem;
  }

  ul li {
    padding: 0.6rem 1rem;
    background-color: #222;
    cursor: pointer;
    border-radius: 0.2rem;
    transition: 0.6s all;
  }

  ul li:hover {
    background-color: #fff;
    color: #000;
  }

  div:first-child {
    display: flex;
    align-items: center;
    gap: 1rem;
    height: 100%;
  }

  img:first-child {
    max-height: 70%;
    border-radius: 50%;
    border: 0.2rem solid #ccc;
    justify-self: flex-start;
  }

  @media screen and (max-width: 520px) {
    flex-direction: column;
    padding: 0.5rem 0;
    svg,
    img:first-child {
      display: none;
    }

    div {
      max-height: 50%;
    }

    div:last-child {
      max-height: fit-content;
      height: fit-content;
    }
  }
`;
