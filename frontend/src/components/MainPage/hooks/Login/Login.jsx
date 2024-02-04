import React from 'react'
import { Link } from 'react-router-dom'
import LoginJS from './LoginJS'
import './Login.css'
const Login = () => {
  const numbers = '1234567890'
  const {
    password,
    setPassword,
    handlePassword
  } = LoginJS()
  return (
    <div className='Login c'>
      <div className='con c r flex-c'>
        <header className='c'>
          <h2><Link>Register</Link></h2>
          <p><Link>Settings</Link></p>
        </header>
        <form className='c flex-c' action="">
          <div className='input c'>
            <input 
              type="text"
              value={password}
              onChange={(e) => handlePassword(e)}
              required
              placeholder='' 
            />
            <label htmlFor="">Password</label>
          </div>
          <div className='numbers c'>
            {numbers.split('').map((number, index) => (
              <React.Fragment key={index}>
                <div onClick={() => handlePassword(number)} className='number c r'>{number}</div>
                {index === 8 && <div onClick={() => setPassword('')} className='number c r'>Del</div>}
                {index === 9 && <div onClick={() => setPassword(prev => prev.slice(0, -1))} className='number c r'>Min</div>}
              </React.Fragment>
            ))}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
