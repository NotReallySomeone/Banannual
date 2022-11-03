import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Pages
import Dashboard from './pages/Dashboard'
import Login from './pages/Dashboard'
import NoPage from './pages/Nopage'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="Dashboard" element={<Dashboard />}></Route>
      <Route path="*" element={<NoPage />}></Route>
      <Route path="Login" element={<Login />}></Route>
    </Routes>
  </BrowserRouter>
)
