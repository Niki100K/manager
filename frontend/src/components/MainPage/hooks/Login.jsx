import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import LoginJS from './LoginJS'
const Login = () => {
  const {
    password,
    handleForm,
    numbers,
    incorrectPass,
    handleLogin,
    handleClear,
    handleRemoveLastSymbol,
  } = LoginJS()
  return (
    <div className='Login c r flex-c'>
      <div className='head c'>
        <h2><Link to={'register'}>Register</Link></h2>
        <p>Manager</p>
      </div>
      <form className='c flex-c' onSubmit={handleLogin} action="">
        <div className='input c'>
          <input 
            className={`${password.length === 4 && 'correct'}`}
            type="text"
            value={password}
            onChange={(e) => handleForm(e)}
            placeholder='' 
            required
          />
          <label htmlFor="">Password</label>
        </div>
        {incorrectPass &&
          <div className='error c r'>
            <p>Password is less then 4 symbols.</p>
          </div>
        }
        <div className='numbers c'>
          {numbers.split('').map((info, index) => (
            <React.Fragment key={index}>
              <div onClick={() => handleForm(info)} className='number c r'>
                <h1>{info}</h1>
              </div>
              {index === 8 && (
                <div onClick={handleClear} className='number del c r'>
                  Del
                </div>
              )}
              {index === 9 && (
                <div onClick={handleRemoveLastSymbol} className='number c r'>
                  &lt;-
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className='btn c'>
          <button type='button'>Settings</button>
          <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login
