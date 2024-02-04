import React from 'react'
import './MainPage.css'
import Login from './hooks/Login/Login'
import Main from './hooks/Main/Main'
import { useSelector } from 'react-redux'
const MainPage = () => {
  const isActive = useSelector(state => state.UserData.isActive)
  return (
    <div className='MainPage c'>
      {!isActive ? (
        <Main />
      ) : (
        <Login />
      )}
    </div>
  )
}

export default MainPage
