import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Gallery from './Components/Gallery/Gallery';
import Shop from './Components/Shop/Shop';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      }
      ,{
        path:"gallery"
        ,element:<Gallery></Gallery>,
        loader:()=> fetch('gallery.json')
      }
      ,{
        path:"shop"
        ,element:<Shop></Shop>,
        loader: ()=>fetch('wedding.json')
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
