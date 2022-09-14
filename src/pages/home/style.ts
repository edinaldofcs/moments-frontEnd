import styled from "styled-components";

export const S_HOME = styled.div`
  max-width: 100vw;
  height: 75vh;
  display: flex;

  aside {
    height: 75vh;
    width: 30%;
    text-align: center;
    padding: 0.5rem 0.2rem;

    div {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      position: relative;

      div {
        background-color: #fff;
        color: #000;
        border: 1px solid #999;
        cursor: pointer;
        padding: 0.5rem 0;
        position: sticky;
        top: 0;
        transition: 0.4s all;

        &:hover {
          background-color: #000;
          color: #fff;
        }
      }
    }
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    width: 70%;
    height: fit-content;
    padding-bottom: 5rem;
    padding-left: 5rem;
    align-items: flex-start;
  }

  @media screen and (max-width: 568px) {
    flex-direction: column;
    align-items: center;
   
    aside {
      width: 100%;
      div {
        flex-direction: row;
        justify-content: center;
        width: 100%;

        div {
          width: fit-content;
          padding: 0.5rem 1rem;
        }
      }
    }

    main {
      width: 100%;
      align-items: center;
      padding-bottom: 5rem;
      padding-left: 0;
    }
  }
`;
