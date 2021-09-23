import { useState, useEffect } from 'react'
import axios from 'axios'
const Checkbox = ({ type = 'checkbox', name, checked = false, onChange }) => {
  // console.log("Checkbox: ", name, checked);
  return <input type={type} name={name} checked={checked} onChange={onChange} />
}
const AdminAddCharacter = () => {
  const [houses, setHouses] = useState([])
  const [name, setName] = useState('')
  const [actorName, setActorName] = useState('')
  const [image, setImage] = useState('')
  const [selectedHouse, setSelectedHouse] = useState('1')
  const [spell, setSpell] = useState([])
  const [checkedSpell, setCheckedSpell] = useState({})
  const [checkSpellTab, setCheckSpellTab] = useState([])
  useEffect(() => {
    const getData = async () => {
      const results = await axios.get('http://localhost:4242/houses')
      // console.log(results.data)
      setHouses(results.data)
    }
    getData()
  }, [])
  useEffect(() => {
    const getData = async () => {
      const results = await axios.get('http://localhost:4242/spell')
      // console.log(results.data)
      setSpell(results.data)
    }
    getData()
  }, [])

  const handleChangeHouses = e => setSelectedHouse(e.target.value)
  const handleSubmit = e => {
    e.preventDefault()
    const dataPost = {
      firstname: name,
      actorName: actorName,
      image: image,
      houses_id: selectedHouse,
      spell: checkedSpell
    }
    axios.post('http://localhost:4242/characters', dataPost)
    console.log(dataPost)
  }
  const handleChange = async event => {
    setCheckedSpell({
      ...checkedSpell,
      [event.target.name]: event.target.checked
    })
  }

  return (
    <div>
      {
        // console.log('filterTab: ', checkSpellTab)
        //   console.log('checkedSpell:', checkedSpell)
        /* {console.log('name', name) ||
        console.log('actorName', actorName) ||
        console.log('image', image) ||
        console.log('setSelectedHouse', selectedHouse)} */
      }
      <p>Add character</p>
      <form onSubmit={handleSubmit}>
        <label>
          name character:
          <input
            type='text'
            name='name'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <label>
          actor name :
          <input
            type='text'
            name='actorName'
            value={actorName}
            onChange={e => setActorName(e.target.value)}
          />
        </label>
        <label>
          image url :
          <input
            type='text'
            name='image'
            value={image}
            onChange={e => setImage(e.target.value)}
          />
        </label>
        <label>
          House:
          <select onChange={e => handleChangeHouses(e)}>
            {houses.map(house => (
              <option key={house.id} value={house.id}>
                {house.houseName}
              </option>
            ))}
          </select>
        </label>
        {spell.map(item => (
          <label key={item.id}>
            {item.spell}
            {item.id}
            <Checkbox
              name={item.id}
              checked={checkedSpell[item.id]}
              onChange={handleChange}
              id={item.id}
            />
          </label>
        ))}
        <input type='submit' value='Envoyer' />
      </form>
    </div>
  )
}

export default AdminAddCharacter
