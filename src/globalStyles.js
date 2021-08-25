import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${props => props.theme.colors.veryLightGrayBG};
    font-family: ${props => props.theme.fonts[0]};
  }
`

export default GlobalStyle
