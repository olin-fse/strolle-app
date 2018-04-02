import React from 'react';
import { Alert, Media, Container, Row, Col, Nav,
    NavItem, NavLink, Dropdown, DropdownItem,
    DropdownToggle, DropdownMenu, Button } from 'reactstrap';
import { Link } from 'react-router';

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

    changeTab = (tab) => {
        tab.preventDefault();
        console.log(tab);
        this.setState({currentTab: this.tab})
    }


    render() {
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
                            <NavItem>
                              <Button onClick={this.changeTab(1)} color="link"><NavLink href="#" active>Link</NavLink></Button>
                            </NavItem>
                            <NavItem>
                              <Button onClick={this.changeTab(2)} color="link"><NavLink href="#">Link</NavLink></Button>
                            </NavItem>
                            <NavItem>
                              <Button onClick={this.changeTab(3)} color="link"><NavLink href="#">Another Link</NavLink></Button>
                            </NavItem>
                        </Nav>
                    </div>
                    <br></br>
                    <div id="content">
                        <Row>
                            <Col sm={{ size: 6, order: 2, offset: 1 }}>.col-sm-6 .col-sm-order-2 .col-sm-offset-2</Col>
                        </Row>
                    </div>
                    <p>{this.state.currentTab}</p>
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
