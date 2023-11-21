import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Success from './components/Success.jsx'
import ErrorPage from "./components/ErrorPage.jsx"
import { Provider } from 'react-redux';
import store from './utils/donationStore.jsx'


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/success",
    element: <Success />
  },


])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>



  </React.StrictMode>,
)
