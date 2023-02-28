import React, { useEffect, useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { SessionProvider } from '@contexts/SessionContext'
import Home from '@pages/Home'
import Login from '@pages/Login'
import { RouterPages } from '@models/enums/RouterEnums'
import LoaderSplash from 'components/LoaderSplash'
import useSession from '@hooks/useSession'
import Root from '@pages/Root'

const routes = createBrowserRouter([
  {
    path: RouterPages.home,
    element: <Root />,
    children: [
      { index: true, element: <Home /> }
    ]
  },
  { path: RouterPages.login, element: <Login /> }
])

const RouterRender = () => {
  const { load } = useSession()

  const [splash, setSplash] = useState<boolean>(true)

  const handleHideSplash = async () => {
    if (localStorage.getItem('shorty-token')) {
      setSplash(await load())
    } else {
      setSplash(false)
    }
  }

  useEffect(() => {
    handleHideSplash()
  }, [])

  return (
    splash
      ? <LoaderSplash />
      : <RouterProvider router={routes} />
  )
}

const Router = () => {
  return (
    <SessionProvider>
      <RouterRender />
    </SessionProvider>
  )
}

export default Router