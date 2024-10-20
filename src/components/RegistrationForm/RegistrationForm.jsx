import { useId } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const RegistrationForm = ({ submit }) => {
  const nameId = useId()
  const emailId = useId()
  const passwordId = useId()

  const RegistrationSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('The field is required'),
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
      validationSchema={RegistrationSchema}>
      <Form>
        <div>
          <label htmlFor={nameId}>Name</label>
          <Field type='text' id={nameId} name='name' />
          <ErrorMessage name='name' component='span' />
        </div>
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
        <button type='submit'>Register</button>
      </Form>
    </Formik>
  )
}

export default RegistrationForm
