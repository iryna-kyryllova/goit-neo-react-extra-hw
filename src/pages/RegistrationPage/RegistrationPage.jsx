import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { register } from '../../redux/auth/operations'
import RegistrationForm from 'components/RegistrationForm/RegistrationForm'

const RegistrationPage = () => {
  const dispatch = useDispatch()

  const handleRegistration = (data) => {
    dispatch(register(data))
      .unwrap()
      .then((res) => toast.success(`Account for ${res.user.namee} was successfully created!`))
  }

  return (
    <div>
      <h1>Create an account</h1>
      <RegistrationForm submit={handleRegistration} />
    </div>
  )
}

export default RegistrationPage
