import { Link } from 'react-router-dom'
import styles from './AuthNav.module.css'

const AuthNav = () => {
  return (
    <ul className={styles.navigation}>
      <li>
        <Link to='/login'>Login</Link>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
    </ul>
  )
}

export default AuthNav
