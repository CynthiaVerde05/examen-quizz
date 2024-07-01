import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/exam-quizz.jsx'
import "./global.css";
import Welcome from './pages/welcome.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Welcome/>
    <App />
  </React.StrictMode>,
)
