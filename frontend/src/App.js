import React from 'react'
import './App.css'

import { MainPage, Register } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { UserData } from './redux/UserData'

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

const store = configureStore({
  reducer: {
    UserData
  }
})

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
