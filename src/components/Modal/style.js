import styled from "styled-components";

export const StyledModalWrapper = styled.div`
  background-color: var(--modal-wrapper);

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
`;

export const StyledForm = styled.form`
  background-color: var(--color-grey3);

  padding: 20px;

  width: 80%;
  max-width: 400px;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  border-radius: var(--radius-4);

  fieldset {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    position: relative;
  }

  span {
    position: absolute;
    bottom: -16px;
    right: 0;

    font-weight: 500;
    font-size: 0.75rem;

    color: var(--color-primary);
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  div > button {
    min-width: 32px;
    padding: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .buttons > button:first-child {
    width: 68%;
  }

  .buttons > button:last-child {
    width: 28%;

    background-color: var(--color-grey2);

    :hover {
      background-color: var(--color-grey1);
    }
  }
`;
