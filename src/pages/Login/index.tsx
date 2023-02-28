import useSession from '@hooks/useSession'
// import Divider from '@layouts/Divider'
import { AuthLoginForm } from '@models/AuthModel'
import { RouterPages } from '@models/enums/RouterEnums'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const { session, login } = useSession()

  const handleSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget) as Iterable<[AuthLoginForm, FormDataEntryValue]>
    const form: AuthLoginForm = Object.fromEntries(formData)
    login(form.email, form.password)
  }

  useEffect(() => {
    if (session?.loaded) {
      navigate(RouterPages.home)
    }
  }, [session?.loaded])

  return (
    <div>
      <section className='vh-100'>
        <div className='container py-5 h-100'>
          <div className='row d-flex align-items-center justify-content-center h-100'>
            <div className='col-md-8 col-lg-7 col-xl-6'>
              <img src='https://salesquared.io/wp-content/uploads/2020/05/Short-URl-Banner2.svg'
                className='img-fluid' alt='Phone image' />
            </div>
            <div className='col-md-7 col-lg-5 col-xl-5 offset-xl-1'>
              <form onSubmit={handleSubmitLogin}>
                <div className='mb-4 text-center'>
                  <h4>Shorty Manager</h4>
                </div>

                {/* <!-- Email input --> */}
                <div className='form-floating mb-4'>
                  <input type='email' name='email' id='form-email' className='form-control form-control-lg' placeholder='email' />
                  <label className='form-label' htmlFor='form-email'>Correo electrónico</label>
                </div>

                {/* <!-- Password input --> */}
                <div className='form-floating mb-4'>
                  <input type='password' name='password' id='form-password' className='form-control form-control-lg' placeholder='password' />
                  <label className='form-label' htmlFor='form-password'>Contraseña</label>
                </div>

                <div className='d-flex justify-content-between align-items-center mb-4'>
                  {/* <!-- Checkbox --> */}
                  <div className='form-check'>
                    <input className='form-check-input' name='remember' type='checkbox' id='form-remember' />
                    <label className='form-check-label' htmlFor='form-remember'> Recuerdame </label>
                  </div>
                  {/* <a href='#!'>Forgot password?</a> */}
                </div>

                {/* <!-- Submit button --> */}
                <div className="d-grid gap-2">
                  <button type='submit' className='btn btn-primary btn-block'>Ingresar</button>
                  {
                    session?.message?.text &&
                    <div className={`alert ${session.message.color} p-1 text-center`}>
                      {
                        session.loading
                          ? <div className="spinner-border spinner-border-sm" role="status">
                            <span className="visually-hidden">{session.message.color}</span>
                          </div>
                          : session.message.text
                      }
                    </div>
                  }
                </div>

                {/* <Divider label='OR' /> */}

                {/* <a className='btn btn-primary btn-lg btn-block' style='background-color: #3b5998' href='#!'
                  role='button'>
                  <i className='fab fa-facebook-f me-2'></i>Continue with Facebook
                </a>
                <a className='btn btn-primary btn-lg btn-block' style='background-color: #55acee' href='#!'
                  role='button'>
                  <i className='fab fa-twitter me-2'></i>Continue with Twitter</a> */}

              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login