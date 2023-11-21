import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Success from './components/Success.jsx'


const appRouter= createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/success",
    element:<Success />
  },
  

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
    
  </React.StrictMode>,
)
