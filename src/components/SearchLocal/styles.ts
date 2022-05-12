import styled from 'styled-components'

export const Container = styled.div`
  /* border: 1px dashed crimson; */
`

export const Input = styled.input`
  width: 100%;
  border: none;

  background: var(--foreground);
  color: var(--text-color);

  border-radius: 5rem;
  padding: 1.2rem 2rem;
  font-size: 1.6rem;

  &:focus {
    outline: none;
    filter: drop-shadow(0 0 0.2rem var(--text-on-shape));
  }

  ::placeholder {
    color: var(--text-on-shape);
  }
`

export const ListResults = styled.ul<{ isOpen: boolean }>`
  width: 100%;
  padding: 2rem 0;
  /* background: green; */
  background-color: var(--foreground);
  border-radius: 2rem;

  transform: ${({ isOpen }) => (isOpen ? 'scaleY(1)' : 'scaleY(0)')}
    translateY(0.05rem);
  transform-origin: top;
  transition: transform 0.2s ease;

  li {
    cursor: pointer;
    list-style: none;
    padding: 1rem 2rem;
    background-color: var(--foreground);
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    &:not(:last-child) {
      border-bottom: 1px solid var(--text-on-shape);
    }
  }
`
