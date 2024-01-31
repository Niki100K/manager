import React, { useCallback, useEffect, useState } from 'react'
import './Login.css'
import { useDispatch } from 'react-redux'
const Login = () => {
  const dispatch = useDispatch()
  const [password, setPassword] = useState('')
  const handleForm = (e) => {
    if (typeof e === 'object') {
      let value = e.target.value
      value = value.replace(/\D/g, '')
      value = value.length > 4 ? value.slice(0, 4) : value
      setPassword(value)
    } else {
      
      setPassword((prev) => (prev.length < 4 ? prev + e : prev));
    }
  }
  const [incorrectPass, setIncorrectPass] = useState(false)
  const handleLogin = useCallback((e) => {
    if (e) {
      e.preventDefault()
    }
    if (password.length === 4) {
      setIncorrectPass(false)
      dispatch({
        type: 'SET_USER'
      })
    } else {
      setIncorrectPass(true)
      dispatch({
        type: 'UNSET_USER'
      })
    }
  }, [dispatch, password.length])
  const handleClear = () => {
    setPassword('')
  }
  const handleRemoveLastSymbol = () => {
    setPassword(prev => prev.slice(0, -1))
  }
  useEffect(() => {
    if (password.length === 4) {
      handleLogin()
    }
  }, [handleLogin, password.length])
  const numbers = '1234567890'
  return (
    <div className='Login c r flex-c'>
      <div className='head c'>
        <h2>Login</h2>
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
