import React from 'react'
import './App.css'
import { Dashboard } from "./pages"
import { Navbar } from "./components"

import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
