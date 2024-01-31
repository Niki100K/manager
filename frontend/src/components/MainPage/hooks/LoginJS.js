import { useState, useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'

const LoginJS = () => {
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
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
    const handleLogin = useCallback(async(e) => {
      if (e) {
        e.preventDefault()
      }
      if (password.length === 4) {
        setIncorrectPass(false)
        try {
            const response = await fetch('http://127.0.0.1:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    password: password
                })
            })
            if (response.ok) {
                const data = await response.json()
                console.log(data);
                dispatch({
                    type: 'SET_USER',
                    payload: data
                })
            }
        } catch (error) {
            console.error(error);
        }
      } else {
        setIncorrectPass(true)
      }
    }, [password, dispatch])
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
  return {
    password,
    handleForm,
    numbers,
    incorrectPass,
    handleLogin,
    handleClear,
    handleRemoveLastSymbol,
  }
}

export default LoginJS
