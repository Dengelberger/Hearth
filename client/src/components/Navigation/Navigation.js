import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import axios from 'axios'

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const [user, setuser] = useState(props.user);

  const toggle = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    axios.post("/api/logout").then(res => {
      console.log(res.data)
      window.location.href = "/"
    }).catch(err => { console.log(err) })
  }

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Hearth</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/browse/">Browse</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/builder">Recipe Builder</NavLink>
            </NavItem>
          </Nav>
          {props.user ?
            <UncontrolledDropdown inNavbar>
              <DropdownToggle nav caret>
                {props.user.first_name}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/user">
                  My Profile
              </DropdownItem>
                <DropdownItem href="/browse">
                  Add Recipe +
              </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={handleLogout}>
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> :
            <NavbarText>
              <a href="/login">Login</a>  |  <a href="/signup">Signup</a>
              {/* <NavLink href="/search/">Login</NavLink><NavLink href="/search/">Signup</NavLink> */}
            </NavbarText>}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;