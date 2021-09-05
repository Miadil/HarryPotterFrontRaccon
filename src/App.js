import { Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Characters from './screen/Characters'
import CharacterDetails from './screen/CharacterDetails'
import Home from './screen/Home'

import './App.css'

function App() {
  // console.log("pouletKey", process.env)
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/characters'>
          <Characters />
        </Route>
        <Route path='/characters/:id'>
          <CharacterDetails />
        </Route>
      </Switch>
    </div>
  )
}

export default App
