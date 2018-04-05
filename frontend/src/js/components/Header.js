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
  DropdownItem,
  Badge } from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      isLoggedIn: this.props.loggedIn,
      unreadMessages: 2
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
      var messages;
      if(this.state.isLoggedIn) {
          loggedInButton = <NavLink href="/login"><Button outline color="primary" id="login">Logout</Button></NavLink>;
          messages = <NavLink href="#"><Button color="success" outline>Messages <Badge color="secondary">{this.state.unreadMessages}</Badge></Button></NavLink>;
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
                        {messages}
                    </NavItem>
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
