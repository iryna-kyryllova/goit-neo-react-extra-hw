import { useSelector, useDispatch } from 'react-redux'
import { selectUser } from '../../redux/auth/selectors'
import { logout } from '../../redux/auth/operations'

const UserMenu = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div>
      <p>Welcome {user.name}!</p>
      <button type='button' onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

export default UserMenu
