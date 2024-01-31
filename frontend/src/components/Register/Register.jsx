import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Register.css'
import RegisterJS from './RegisterJS'
const Register = () => {
  const navigate = useNavigate()
  const {
    form,
    handleForm,
    handleRegister
  } = RegisterJS()
  return (
    <div className='Register c'>
      <div className='con c r flex-c'>
        <header className='c'>
          <h2>Register</h2>
        </header>
        <form className='c flex-c' onSubmit={handleRegister} action="">
          {form.map((info, index) => (
            <div className='input c' key={index}>
              <input
                id={info.id}
                type="text"
                value={info.value}
                onChange={(e) => handleForm(info.field, e, info.maxSymbols)}
                required
                placeholder=''
              />
              <label htmlFor={info.id}>{info.label}</label>
            </div>
          ))}
          <div className='btn c'>
            <button type='button' onClick={() => navigate('/')}>Login</button>
            <button type='submit'>Register</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
