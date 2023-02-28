import React from 'react'
import NavbarMain from '@components/NavbarMain'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <section>
      <NavbarMain />
      <Outlet />
    </section>
  )
}

export default Root