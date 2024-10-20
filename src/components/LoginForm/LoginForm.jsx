import { useId } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const LoginForm = ({ submit }) => {
  const emailId = useId()
  const passwordId = useId()

  const LoginSchema = Yup.object().shape({
    email: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('The field is required'),
    password: Yup.string()
      .min(3, 'Too short!')
      .max(50, 'Too long!')
      .required('The field is required')
  })

  const handleSubmit = (values, actions) => {
    submit(values)
    actions.resetForm()
  }

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: ''
      }}
      onSubmit={handleSubmit}
      validationSchema={LoginSchema}>
      <Form>
        <div>
          <label htmlFor={emailId}>Email</label>
          <Field type='email' id={emailId} name='email' />
          <ErrorMessage name='email' component='span' />
        </div>
        <div>
          <label htmlFor={passwordId}>Password</label>
          <Field type='password' id={passwordId} name='password' />
          <ErrorMessage name='password' component='span' />
        </div>
        <button type='submit'>Login</button>
      </Form>
    </Formik>
  )
}

export default LoginForm
