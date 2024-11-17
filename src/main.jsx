import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './pages/Root';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import AuthProvider from './Auth/AuthProvider';
import DashboardLayout from './layout/dashboard/DashboardLayout';
import PrivateRoute from './routes/Private/PrivateRoute';
import Overview from './pages/dashboard/Overview';
import SellerRoute from './routes/SellerRoute';
import MyProducts from './pages/dashboard/seller/MyProducts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <Register></Register>
      }
    ]
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: [
      {
        path: "/dashboard/overview",
        element: <Overview></Overview>
      },
      //Seller Routes
      {
        path: "/dashboard/my-products",
        element: <SellerRoute><MyProducts /></SellerRoute>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

      <RouterProvider router={router} />

    </AuthProvider>
  </React.StrictMode>,
)

