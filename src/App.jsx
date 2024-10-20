import { lazy, Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import RestrictedRoute from 'guards/RestrictedRoute/RestrictedRoute'
import PrivateRoute from 'guards/PrivateRoute/PrivateRoute'
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage'
import Layout from 'components/Layout/Layout'
import Loader from 'components/Loader/Loader'
import { refreshUser } from './redux/auth/operations'
import { selectIsRefreshing } from './redux/auth/selectors'

const HomePage = lazy(() => import('pages/HomePage/HomePage'))
const RegistrationPage = lazy(() => import('pages/RegistrationPage/RegistrationPage'))
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'))
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'))

const App = () => {
  const dispatch = useDispatch()
  const isRefreshing = useSelector(selectIsRefreshing)

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return isRefreshing ? (
    <Loader />
  ) : (
    <div className='container'>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path='/register'
              element={<RestrictedRoute component={<RegistrationPage />} />}
            />
            <Route path='/login' element={<RestrictedRoute component={<LoginPage />} />} />
            <Route path='/contacts' element={<PrivateRoute component={<ContactsPage />} />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
      <Toaster position='top-right' />
    </div>
  )
}

export default App
