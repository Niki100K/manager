import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
const RegisterJS = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password_confirmation: '',
    })
    const form = [
      {
        id: 'firstName',
        value: formData.firstName,
        field: 'firstName',
        maxSymbols: 30,
        label: 'First Name'
      },
      {
        id: 'lastName',
        value: formData.lastName,
        field: 'lastName',
        maxSymbols: 30,
        label: 'Last Name'
      },
      {
        id: 'email',
        value: formData.email,
        field: 'email',
        maxSymbols: 50,
        label: 'Email'
      },
      {
        id: 'password',
        value: formData.password,
        field: 'password',
        maxSymbols: 4,
        label: 'Password'
      },
      {
        id: 'password_confirmation',
        value: formData.password_confirmation,
        field: 'password_confirmation',
        maxSymbols: 4,
        label: 'Confirm Password'
      },
  ]
  const numbers = [
      'password',
      'password_confirmation',
  ]
  const handleForm = (field, e, maxSymbols) => {
      let value = e.target.value
      if (numbers.includes(field)) {
          value = value.replace(/\D/g, '')
      }
      value = value.length > maxSymbols ? value.slice(0, maxSymbols) : value

      setFormData(prev => ({
          ...prev,
          [field]: value
      }))
  }
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                password: formData.password,
                password_confirmation: formData.password_confirmation,
            })
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            dispatch({
                type: 'SET_USER',
                payload: data
            });
            navigate('/')
        } else {
            console.error('Registration failed');
        }
    } catch (error) {
        console.error(error);
    }
};

  return {
    form,
    handleForm,
    handleRegister
  }
}

export default RegisterJS
