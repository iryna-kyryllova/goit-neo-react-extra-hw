import { useSelector } from 'react-redux'
import { selectLoggedIn } from '../../redux/auth/selectors'
import Navigation from 'components/Navigation/Navigation'
import AuthNav from 'components/AuthNav/AuthNav'
import UserMenu from 'components/UserMenu/UserMenu'

const AppBar = () => {
  const isLoggedIn = useSelector(selectLoggedIn)

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  )
}

export default AppBar
