import { useState, useEffect } from 'react'
import axios from 'axios'

import DisplayCharacter from '../components/DisplayCharacter'
import './Characters.css'

const Characters = () => {
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    const recupData = async () => {
      const results = await axios.get('http://localhost:4242/characters')
      console.log(results.data)
      setCharacters(results.data)
    }
    recupData()
  }, [])

  return (
    <div className='globalCharac'>
      {characters.map(character => (
        <DisplayCharacter key={character.id} {...character} />
      ))}
    </div>
  )
}

export default Characters
