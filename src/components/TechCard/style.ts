import styled from "styled-components";

export const StyledTechCard = styled.li`
  box-sizing: border-box;

  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--color-grey4);

  padding: 10px 25px;

  border-radius: var(--radius-4);

  transition: 0.5s;

  cursor: pointer;

  h2 {
    max-width: 10ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &:hover {
    background-color: var(--color-grey2);
  }

  @media (min-width: 375px) {
    h2 {
      max-width: 20ch;
    }
  }
`;
