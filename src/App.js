import GlobalStyle from './globalStyles'
import Theme from './theme'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './utils/routes'
import { Header } from './components'

function App () {
  return (
    <Theme>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes />
      </Router>
    </Theme>
  )
}

export default App
