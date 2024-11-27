import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import RootLayout from './RootLayout';
import Home from './components/home/Home';
import About from './components/about/About';
import Wallpapers from './components/wallpapers/Wallpapers';
import Login from './components/login/Login';
import Register from './components/register/Register';


function App() {
  const browserRouter=createBrowserRouter([
    {
      path:'',
      element:<RootLayout></RootLayout>,
      children:[
        {
          path:'',
          element:<Home></Home>
        },
        {
          path:'about',
          element:<About></About>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'register',
          element:<Register></Register>
        },
        {
          path:'wallpapers',
          element:<Wallpapers></Wallpapers>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={browserRouter}></RouterProvider>
    </div>
  )
}

export default App