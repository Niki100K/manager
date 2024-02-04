import React from 'react'
import './App.css'

import { Category, MainPage, Register, List } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { UserData } from './redux/UserData'
import { StoreProvider } from './Store'

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
      <StoreProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/register' element={<Register />} />
            <Route path='/:category' element={<><Category /><List /></>} />
          </Routes>
        </BrowserRouter>
      </StoreProvider>
    </Provider>
  )
}

export default App
