import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectLoggedIn } from '../../redux/auth/selectors'
import styles from './Navigation.module.css'

const Navigation = () => {
  const isLoggedIn = useSelector(selectLoggedIn)

  return (
    <ul className={styles.nav}>
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
