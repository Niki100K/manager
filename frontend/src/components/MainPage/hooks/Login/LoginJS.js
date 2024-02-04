import { useState } from 'react'

const LoginJS = () => {
  const maxSymbols = 4
  const [password, setPassword] = useState('')
  const handlePassword = (e) => {
    if (typeof e === 'object') {
      let value = e.target.value
      value = value.length > maxSymbols ? value.slice(0, maxSymbols) : value
      setPassword(value)
    } else {
      setPassword(prev => prev.length < 4 ? prev += e : prev)
    }
  }
  return {
    password,
    setPassword,
    handlePassword,
  }
}

export default LoginJS
