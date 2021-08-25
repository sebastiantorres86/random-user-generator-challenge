import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { UserDetail } from '../components'
import { Home } from '../views'


const Routes = ({ person }) => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/details'>
        <UserDetail />
      </Route>
    </Switch>
  )
}

export default Routes
