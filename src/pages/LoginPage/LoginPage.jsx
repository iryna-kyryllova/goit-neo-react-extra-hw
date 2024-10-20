import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { login } from '../../redux/auth/operations'
import LoginForm from 'components/LoginForm/LoginForm'

const LoginPage = () => {
  const dispatch = useDispatch()

  const handleLogin = (data) => {
    dispatch(login(data))
      .unwrap()
      .then((res) => toast.success(`Welcome back ${res.user.name}!`))
  }

  return (
    <div>
      <h1>Log in</h1>
      <LoginForm submit={handleLogin} />
    </div>
  )
}

export default LoginPage
