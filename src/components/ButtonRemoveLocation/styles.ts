import styled from 'styled-components'

export const Container = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  width: 40px;
  height: 40px;
  transition: transform 0.2s;

  &:active {
    transform: scale(1.1);
  }
`

export const Icon = styled.img``
