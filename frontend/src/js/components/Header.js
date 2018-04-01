import React from 'react';
import {
  Container,
  Button,
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
  DropdownItem } from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      isLoggedIn: this.props.loggedIn
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
      var loggedInButton;
      var signUpButton;
      if(this.state.isLoggedIn) {
          loggedInButton = <NavLink href="/login"><Button outline color="primary" id="login">Logout</Button></NavLink>;
      } else {
          loggedInButton = <NavLink href="/login"><Button outline color="primary" id="login">Login</Button></NavLink>;
          signUpButton = <NavLink href="/signup"><Button color="primary" id="signup">Sign Up</Button></NavLink>;
      }
    return (
      <div>
        <Navbar color="faded" light expand="md">
            <NavbarBrand href="/"><strong>Strolle</strong>app</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="mr-auto" navbar>
                  <NavItem>
                  </NavItem>
                </Nav>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        {loggedInButton}
                    </NavItem>
                    <NavItem>
                        {signUpButton}
                    </NavItem>
                </Nav>
              </Collapse>
        </Navbar>
      </div>
    );
  }
}
