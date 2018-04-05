import React from 'react';
import { Alert, Media, Container, Row, Col, Nav,
    NavItem, NavLink, Dropdown, DropdownItem,
    DropdownToggle, DropdownMenu, Button, Badge } from 'reactstrap';
import { Link } from 'react-router';

import User_Feed from './User_Accounts/feed';
import Messages from './User_Accounts/messages';


export default class Cover extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: true,
            firstname: "Peter",
            lastname: "Seger",
            currentTab: 1
        };

    }

    // changeTab = (e) => {
    //     e.preventDefault();
    //     console.log('The link was clicked.');
    //     console.log(e);
    //     this.setState({currentTab: this.state.currentTab+1})
    // }

    tab1 = (e) => {
        e.preventDefault();
        this.setState({currentTab: 1})
    }
    tab2 = (e) => {
        e.preventDefault();
        this.setState({currentTab: 2})
    }
    tab3 = (e) => {
        e.preventDefault();
        this.setState({currentTab: 3})
    }


    render() {
        var tab1_state;
        var tab2_state;
        var tab3_state;
        var content;

        if(this.state.currentTab == 1) {
            content = <Messages />;
            tab1_state = <NavItem><NavLink href="#" active onClick={this.tab1}>Overview</NavLink></NavItem>;
        } else {
            tab1_state = <NavItem><NavLink href="#" onClick={this.tab1}>Overview</NavLink></NavItem>;
        }
        if(this.state.currentTab == 2) {
            content = <User_Feed />;
            tab2_state = <NavItem>
              <NavLink href="#" active onClick={this.tab2}>Paths</NavLink>
            </NavItem>;
        } else {
            tab2_state = <NavItem>
              <NavLink href="#" onClick={this.tab2}>Paths</NavLink>
            </NavItem>;
        }
        if(this.state.currentTab == 3) {
            content = <p>Settings</p>;
            tab3_state = <NavItem>
              <NavLink href="#" active onClick={this.tab3}>Settings</NavLink>
            </NavItem>;
        } else {
            tab3_state = <NavItem>
              <NavLink href="#" onClick={this.tab3}>Settings</NavLink>
            </NavItem>;
        }



        return (
          <div>
            <Media>
                <Media left href="#">
                  <Media id="profile_pic" object src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Generic placeholder image" />
                </Media>
                <Container>
                    <h1>Hey {this.state.firstname}!</h1>
                    <div id="nav">
                        <Nav tabs>
                            {tab1_state}
                            {tab2_state}
                            {tab3_state}
                        </Nav>
                    </div>
                    <br></br>
                    <div id="content">
                        <Row>
                            <Col sm={{ size: 11.5, order: 2, offset: 0.5 }}>
                                {content}
                            </Col>
                        </Row>
                    </div>
                </Container>
              </Media>
              <br></br>
              <br></br>
              <Media>

              </Media>
          </div>
        );
    }
};
