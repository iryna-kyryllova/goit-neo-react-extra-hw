import { useSelector, useDispatch } from 'react-redux'
import { selectUser } from '../../redux/auth/selectors'
import { logout } from '../../redux/auth/operations'
import styles from './UserMenu.module.css'

const UserMenu = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div className={styles.menu}>
      <p>Welcome {user.name}!</p>
      <button type='button' onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

export default UserMenu
