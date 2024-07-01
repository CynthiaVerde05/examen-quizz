import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/exam-quizz.jsx'
import "./global.css";
import Welcome from './pages/welcome.jsx';
/* import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter ([
  {
    path: "/",
    element: <div>hello</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render (
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
); */



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Welcome/>
    <App />
  </React.StrictMode>,
)
