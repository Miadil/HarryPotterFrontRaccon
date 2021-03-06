import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const CharacterDetails = () => {
  const { id } = useParams()
  const [character, setCharacter] = useState([])
  useEffect(() => {
    const recupData = async () => {
      const results = await axios.get(`http://localhost:4242/characters/${id}`)
      console.log(results.data)
      setCharacter(results.data)
    }
    recupData()
  }, [])

  return (
    <div>
      {character.map(info => (
        <div key={info.id}>
          <p>{info.name}</p>
          <img src={info.image} alt={info.name} />
        </div>
      ))}
    </div>
  )
}
export default CharacterDetails
