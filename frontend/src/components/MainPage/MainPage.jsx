import React from 'react'
import './MainPage.css'
import Login from './hooks/Login'
import Active from './hooks/Active'
import { useSelector } from 'react-redux'
const MainPage = () => {
  const isActive = useSelector(state => state.UserData.isActive)
  return (
    <div className='MainPage c'>
      {isActive ? (
        <Active />
      ) : (
        <Login />
      )}
    </div>
  )
}

export default MainPage
