import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Userpage from './pages/Userpage';
import Loginpage from './pages/Loginpage';
import { Provider } from 'react-redux';
import Store from './redux/Store';
import { Routes } from 'react-router-dom';
import Userpagelogin from './pages/userpagelogin';
import Authpage from './hooks/privatepage/Authpage';
import Registerpage from './pages/Registerpage';
import Order from './pages/Order';
import Privatepay from './hooks/privatepage/privatepay';
import Pembayaranpage from './pages/Pembayaranpage';
import Privateorder from './hooks/privateorder';

// const router = createBrowserRouter([   
  
//   // {
//   //   path: "/",
//   //   element: <Userpage/>,
//   //   eror:<div>opps eror!!</div>
  
//   // },
//   // {
//   //   path: "/login",
//   //   element: <Loginpage/>,
//   // },
//   // {
//   //   path: "/register",
//   //   element: <Registerpage/>,
//   // },
//   // {

//   //   path: "/userpage",
//   //   element: <Userpagelogin/>,
//   //   eror:<div>opps eror!!</div>
//   // },
//   // {
//   //   path: "/userpage/pembayaran/order",
//   //   element: <Order/>,
//   // },
// ]);





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={Store}>
      {/* <RouterProvider router={router} /> */}
      <Router>
        <Routes>
         <Route path ="/" element={<Userpage/>}></Route>
         <Route path ="/login" element={<Loginpage/>}></Route>
         <Route path ="/register" element={<Registerpage/>}></Route>
         <Route exact element={<Authpage />}>
            <Route exact path="/userpage" element={<Userpagelogin />} />
          </Route>
          <Route exact element={<Privatepay /> }>
            <Route exact path="/userpage/pembayaran" element={<Pembayaranpage />} />
          </Route>
          <Route exact element={<Privateorder/>}>
            <Route exact path="/userpage/pembayaran/order" element={<Order/>} />
          </Route>
        </Routes>
      </Router>
      </Provider>
  </React.StrictMode>,
)
