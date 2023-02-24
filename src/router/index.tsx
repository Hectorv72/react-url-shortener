import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'

const routes = createBrowserRouter([
  {path: '/', element: <Home />}
])

const Router = () => {
  return <RouterProvider router={routes} />
}

export default Router