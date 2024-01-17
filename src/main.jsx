import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router,} from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </Router>
)
