import React from 'react'
import ReactDOM from 'react-dom'
import Erreur from './Composant/Erreur'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<Erreur />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
