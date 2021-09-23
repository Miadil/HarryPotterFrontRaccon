import { Switch, Route } from 'react-router-dom'

import AdminAddCharacter from './screen/AdminAddCharacter'
import Characters from './screen/Characters'
import CharacterDetails from './screen/CharacterDetails'
import Header from './components/Header'
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
        <Route path='/admin'>
          <AdminAddCharacter />
        </Route>
      </Switch>
    </div>
  )
}

export default App
