import { NavLink } from 'react-router-dom'

import './Header.css'

const Header = () => {
  return (
    <header className='navbar'>
      <NavLink to='/' className='navbar-logo'>
        Harry Potter
      </NavLink>
      <ul className='navbar-list'>
        <NavLink exact to='/' className='linkNav' activeClassName='chosen'>
          <li className='itemNavMenu'>Home</li>
        </NavLink>
        <NavLink to='/characters' className='linkNav' activeClassName='chosen'>
          <li className='itemNavMenu'>Characters</li>
        </NavLink>
      </ul>
    </header>
  )
}
export default Header
