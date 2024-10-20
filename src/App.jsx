import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import RestrictedRoute from 'guards/RestrictedRoute/RestrictedRoute'
import PrivateRoute from 'guards/PrivateRoute/PrivateRoute'
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage'
import Loader from 'components/Loader/Loader'

const HomePage = lazy(() => import('pages/HomePage/HomePage'))
const RegistrationPage = lazy(() => import('pages/RegistrationPage/RegistrationPage'))
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'))
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'))

const App = () => {
  return (
    <div className='container'>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={<RestrictedRoute component={<RegistrationPage />} />} />
          <Route path='/login' element={<RestrictedRoute component={<LoginPage />} />} />
          <Route path='/contacts' element={<PrivateRoute component={<ContactsPage />} />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Toaster position='top-right' />
    </div>
  )
}

export default App
