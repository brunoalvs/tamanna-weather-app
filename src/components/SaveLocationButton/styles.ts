import styled from 'styled-components'

export const Container = styled.button<{
  isSaved: boolean
}>`
  background: transparent;
  border: 0;
  cursor: pointer;
  width: 40px;
  height: 40px;

  > svg {
    stroke: ${({ isSaved }) => (isSaved ? 'transparent' : '#fff')};

    path {
      fill: ${({ isSaved }) => (isSaved ? '#FFDC64' : 'transparent')};
    }
  }
`
