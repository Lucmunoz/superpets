import './main.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'
import PetsContextProvider from './context/PetsContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PetsContextProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </PetsContextProvider>
  </React.StrictMode>
)
