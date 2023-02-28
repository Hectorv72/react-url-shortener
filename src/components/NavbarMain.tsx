import useSession from '@hooks/useSession'
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import UserDropdown from './UserDropdown'
import { NavLink } from 'react-router-dom'
import { RouterPages } from '@models/enums/RouterEnums'
// import { RouterPages } from '@models/enums/RouterEnums'
// import React from 'react'
// import { Link } from 'react-router-dom'
// import UserActions from './UserActions'

const NavbarMain = () => {
  const { session } = useSession()

  return (
    <Navbar bg="light">
      <Container fluid>
        <Navbar.Brand>Shorty Manager</Navbar.Brand>
        <Nav className="justify-content-end">
          {
            session?.loaded
              ? <UserDropdown />
              : <NavLink className='link-dark' to={RouterPages.login}>Login / Registro</NavLink>
          }
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavbarMain