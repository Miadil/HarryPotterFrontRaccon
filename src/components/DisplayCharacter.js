import { Link } from 'react-router-dom'

import './DisplayCharacter.css'
// eslint-disable-next-line
const DisplayCharacter = ({ image, id, name }) => {
  const idCharacter = `/characters/${id}`
  return (
    <div className='card'>
      <Link to={idCharacter}>
        <img className='cardImg' src={image} alt={name} />
        <p className='cardName'>{name}</p>
      </Link>
    </div>
  )
}

export default DisplayCharacter
