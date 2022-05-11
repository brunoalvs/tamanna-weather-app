import styled, { css } from 'styled-components'

export const Container = styled.a<{
  isActive: boolean
}>`
  display: grid;
  gap: 0.5rem;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  justify-items: center;

  position: relative;
  transition: filter 0.2s ease;

  ${({ isActive }) =>
    isActive &&
    css`
      &::before {
        content: '';
        display: block;
        background: var(--gradient);
        position: absolute;
      }
    `}

  &:hover {
    filter: brightness(0.8);
  }

  @media (max-width: 744px) {
    grid-template-columns: 40px 1fr;

    ${({ isActive }) =>
      isActive &&
      css`
        &::before {
          width: 100%;
          height: 0.6rem;
          bottom: -1rem;
        }
      `}
  }

  @media (min-width: 745px) {
    grid-template-rows: 40px 20px;

    ${({ isActive }) =>
      isActive &&
      css`
        &::before {
          width: 0.8rem;
          height: 100%;
          top: 0;
          left: -1.8rem;
        }
      `}
  }
`

export const Icon = styled.figure`
  width: 40px;
  height: 40px;

  > img {
    width: 100%;
    height: 100%;
  }
`

export const Text = styled.span`
  color: var(--text-color);
  font-size: 1.5rem;
  font-weight: bold;
`
