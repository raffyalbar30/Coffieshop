import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Userpage from './pages/Userpage';
import Loginpage from './pages/Loginpage';
import { Provider } from 'react-redux';
import Store from './redux/Store';
import Pembayaran from './pages/Pembayaranpage';
import Userpagelogin from './pages/userpagelogin';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Userpage/>,
    eror:<div>opps eror!!</div>
  },
  {
    path: "/login",
    element: <Loginpage/>,
  },
  {
    path: "/userpage",
    element: <Userpagelogin/>,
    eror:<div>opps eror!!</div>
  },
  {
    path: "/pembayaran",
    element: <Pembayaran/>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={Store}>
      <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>,
)
