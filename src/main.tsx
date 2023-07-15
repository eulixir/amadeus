import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import { App } from './App'

const rootElement = document.getElementById('root')!

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
