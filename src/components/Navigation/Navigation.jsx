import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectLoggedIn } from '../../redux/auth/selectors'

const Navigation = () => {
  const isLoggedIn = useSelector(selectLoggedIn)

  return (
    <ul>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      {isLoggedIn && (
        <li>
          <NavLink to='/contacts'>Contacts</NavLink>
        </li>
      )}
    </ul>
  )
}

export default Navigation
