import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    veryDarkGrayBG: 'hsl(0, 0%, 98%)'
  },
  fonts: ['Nunito Sans', 'sans-serif']
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
