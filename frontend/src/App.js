import React from 'react'
import { MainPage } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
