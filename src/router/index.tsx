import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { SessionProvider } from '@contexts/SessionContext'
import Home from '@pages/Home'
import Login from '@pages/Login'
import { RouterPages } from '@models/enums/RouterEnums'

const routes = createBrowserRouter([
  { path: RouterPages.home, element: <Home /> },
  { path: RouterPages.login, element: <Login /> }
])

const Router = () => {
  return (
    <SessionProvider>
      <RouterProvider router={routes} />
    </SessionProvider>
  )
}

export default Router