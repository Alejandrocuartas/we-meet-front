import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './tailwind.css'

import Landing from './pages/Landing'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
