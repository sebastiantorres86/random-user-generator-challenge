import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
  padding: 25px;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media only screen and (min-width: 1140px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media only screen and (min-width: 1440px) {
    grid-template-columns: repeat(6, 1fr);
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`
