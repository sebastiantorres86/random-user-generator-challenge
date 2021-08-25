import styled from 'styled-components'

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  padding: 30px;

  @media only screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
