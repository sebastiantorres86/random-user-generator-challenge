import React from 'react'
import { Container, StyledLink } from './Header.styles'

const Header = () => {
  return (
    <Container>
      <StyledLink to='/'>
        <h1>Random Users Generator Challenge</h1>
      </StyledLink>
    </Container>
  )
}

export default Header
