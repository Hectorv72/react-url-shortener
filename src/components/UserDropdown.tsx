import React from 'react'
import useSession from '@hooks/useSession'
import { NavDropdown } from 'react-bootstrap'


const UserDropdown = () => {
  const { session, logout } = useSession()

  return (
    <NavDropdown color='white' title={session?.user?.username} id="navbarScrollingDropdown" align='end'>
      <NavDropdown.Item>
        Mis links
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item onClick={() => logout()} className='text-danger'>Salir</NavDropdown.Item>
    </NavDropdown>
  )
}

export default UserDropdown