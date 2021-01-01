import styled from "styled-components"

export const PagerStyles = styled.aside`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  grid-gap: var(--spacing);
  font-family: var(--serif);
  font-size: var(--h5);

  @media (min-width: 768px) {
    grid-gap: calc(var(--spacing) * 2);
  }

  @media (min-width: 1200px) {
    grid-gap: calc(var(--spacing) * 3);
  }

  a {
    color: var(--black);
    text-decoration: none;
  }

  .btns {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    display: flex;
    justify-content: space-between;
  }

  .numbers {
    grid-column: 1 / 3;
    grid-row: 2 / 3;

    a {
      padding-right: var(--spacing);
    }
  }
`
