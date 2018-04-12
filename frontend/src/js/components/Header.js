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
const request = require('superagent');
import { Link, Redirect, Route, Router, browserHistory } from 'react-router';
import { loginComp } from './../containers/App'

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      isLoggedIn: this.props.loggedIn,
      unreadMessages: 2,
      redirect: false,
      route: ''
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  handleLogin = (e) => {
      e.preventDefault();
      console.log('handleLogin');
      request
          .get('/login')
          .then(
             this.setState( {redirect: true, route: '/login'} )
          )
  }

  render() {
        var loggedInButton;
        var signUpButton;
        var messages;

        if(this.state.isLoggedIn) {
            loggedInButton = <NavLink href="/api/login" onClick={this.handleLogin}><Button outline color="primary" id="login">Logout</Button></NavLink>;
            messages = <NavLink href="#"><Button color="success" outline>Messages <Badge color="secondary">{this.state.unreadMessages}</Badge></Button></NavLink>;
        } else {
            loggedInButton = <NavLink href="/login" onClick={this.handleLogin}><Button outline color="primary" id="login">Login</Button></NavLink>;
            signUpButton = <NavLink href="/signup"><Button color="primary" id="signup">Sign Up</Button></NavLink>;
        }

        if(this.state.redirect) {
            return(
              <Router history={browserHistory}>
                  <Redirect from="/" to={this.state.route}/>
                  <Route path='/login' component={loginComp}/>
              </Router>
            )
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
