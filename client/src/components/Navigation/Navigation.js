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

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  // This is a placeholder for passport is loggin?
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

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
              <NavLink href="/builder/">Recipe Builder</NavLink>
            </NavItem>
          </Nav>
          {isLoggedIn ?
            <UncontrolledDropdown inNavbar>
              <DropdownToggle nav caret>
                Kevin
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  My Profile
              </DropdownItem>
                <DropdownItem>
                  Favorites
              </DropdownItem>
                <DropdownItem>
                  Add Recipe +
              </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
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