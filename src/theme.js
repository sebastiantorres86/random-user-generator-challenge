import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    darkBlue: 'hsl(209, 23%, 22%)',
    veryDarkBlueBG: 'hsl(207, 26%, 17%)',
    veryDarkBlue: 'hsl(200, 15%, 8%)',
    darkGrey: 'hsl(0, 0%, 52%)',
    veryDarkGrayBG: 'hsl(0, 0%, 98%)',
    white: 'hsl(0, 0%, 100%)'
  },
  fonts: ['Nunito Sans', 'sans-serif'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em'
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
