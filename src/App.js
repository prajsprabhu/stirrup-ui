import React from 'react'
import Login from './components/Login'
import Register from './components/Register'
import Recipes from './components/Recipes'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/register' component={Register} />
          <Route path='/recipes' component={Recipes} />

          <Route path='/login' component={Login} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
