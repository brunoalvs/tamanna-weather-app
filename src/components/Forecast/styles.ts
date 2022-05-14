import styled from 'styled-components'

export const Container = styled.div`
  background-color: var(--foreground);
  padding: 3rem 1.5rem;

  .title {
    font-size: 3.6rem;
    color: var(--text-color);
    font-weight: 400;
    text-align: center;
  }
`

export const List = styled.ul`
  list-style: none;
  display: grid;
  gap: 2rem;
  padding: 4rem 0;
`

export const ListItem = styled.li`
  min-height: 100px;
  background-color: rgba(255, 255, 255, 0.25);
  color: var(--text-color);

  display: grid;
  grid-template-columns: 5fr 1fr;

  padding: 1rem;

  > article {
    padding: 1rem;

    .temp {
      font-size: 3.2rem;
    }
  }

  > figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 70px;
      height: 70px;
    }

    figcaption {
      text-transform: capitalize;
    }
  }
`
