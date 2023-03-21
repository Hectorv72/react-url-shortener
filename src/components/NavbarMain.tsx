import useSession from '@hooks/useSession'
import { Container, Nav, Navbar } from 'react-bootstrap'
import UserDropdown from './UserDropdown'
import { NavLink } from 'react-router-dom'
import { RouterPages } from '@models/enums/RouterEnums'

const NavbarMain = () => {
  const { session } = useSession()

  return (
    <Navbar bg="primary">
      <Container fluid>
        <Navbar.Brand className='text-light'>Shorty Manager</Navbar.Brand>
        <Nav className="justify-content-end">
          {
            session?.loaded
              ? <UserDropdown />
              : <NavLink className='link-light' to={RouterPages.login}>Login / Registro</NavLink>
          }
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavbarMain