import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import { App } from './App'
import { setupHistory } from './services/history/setupHistory'

const rootElement = document.getElementById('root')!

setupHistory()

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
