import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from '../views'

const Routes = ({ language }) => {
  console.log(language)
  return (
    <Switch>
      <Route exact path='/'>
        <Home language={language} />
      </Route>
    </Switch>
  )
}

export default Routes
