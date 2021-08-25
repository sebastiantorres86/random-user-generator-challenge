import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${props => props.theme.colors.veryDarkGrayBG};
    font-family: ${props => props.theme.fonts[0]};
    max-width: 1440px;
    margin: 0 auto;
    font-family: ${props => props.theme.fonts[0]};
  }
`

export default GlobalStyle
