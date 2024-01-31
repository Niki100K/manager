import React, { useState } from 'react'
import './Login.css'
const Login = () => {
  const [niki100PassLogin, setNiki100PassLogin] = useState('')
  const handleForm = (e) => {
    if (typeof e === 'object') {
      let value = e.target.value
      value = value.replace(/\D/g, '')
      value = value.length > 5 ? value.slice(0, 5) : value
      setNiki100PassLogin(value)
    } else {
      
      setNiki100PassLogin(niki100PassLogin.length < 5 ? niki100PassLogin + e : niki100PassLogin)
    }
  }
  const [incorrectPass, setIncorrectPass] = useState(false)
  const handleLogin = (e) => {
    e.preventDefault()
    if (niki100PassLogin.length === 5) {
      setIncorrectPass(false)
    } else {
      setIncorrectPass(true)
    }
  }
  const numbers = [
    '1234567890'
  ]
  return (
    <div className='Login c r flex-c'>
      <div className='head c'>
        <h2>Niki100</h2>
        <p>Manager</p>
      </div>
      <header className='c'>Login</header>
      <form className='c flex-c' onSubmit={handleLogin} action="">
        <div className='input c'>
          <input 
            className={`${niki100PassLogin.length === 5 && 'correct'}`}
            type="number"
            value={niki100PassLogin}
            onChange={(e) => handleForm(e)}
            placeholder='' 
            required
          />
          <label htmlFor="">Password</label>
        </div>
        {incorrectPass &&
          <div className='error c r'>
            <p>Password is less then 5 symbols.</p>
          </div>
        }
        <div className='numbers c'>
          {numbers[0].split('').map((info, index) => (
            <div onClick={() => handleForm(info)} className='number c r' key={index}>
              <h1>{info}</h1>
            </div>
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
