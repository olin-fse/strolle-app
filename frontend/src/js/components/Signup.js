import React from 'react';
import { Col, Component, Card, CardImg, CardText, CardBody,
    CardTitle, CardLink, CardSubtitle, Button, Form,
    FormGroup, Label, Input, FormText, Alert} from 'reactstrap';
// import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import Dimensions from 'react-dimensions';
import {Cover} from './User_Page';
import { Link, Redirect, Route, Router, browserHistory } from 'react-router';
const request = require('superagent');


class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            route: ''
        };
    }


    handleSubmit = (e) => {
        e.preventDefault;

        let firstname = e.target[0].value;
        let lastname = e.target[1].value;
        let email = e.target[2].value;
        let password = e.target[3].value;


        request
            .post('api/users')
            .send({
                first: firstname,
                last: lastname,
                blurb: "",
                photo: "",
                email: email,
                pass: password
            })
            .then((res) => {
                console.log(res);
                const route = "/users/" + res.body.insertId;
                this.setState(
                    {
                        redirect: true,
                        route: route
                    }
                )
            })
    }


    render() {
        const redirect = this.state.redirect;
        // if(redirect) {
        //     return(
        //         <Router history={browserHistory}>
        //             <Redirect from="/signup" to={this.state.route}/>
        //             <Route path='/users/:userId' component={Cover}/>
        //         </Router>
        //     )
        // }


        return (
            <div>
                <h1>Sign Up</h1>
                  <Card>
                        <CardBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                  <Label for="firstName" sm={2}>First Name</Label>
                                  <Col sm={10}>
                                    <Input type="name" name="name" id="firstName" />
                                  </Col>
                            </FormGroup>
                            <FormGroup row>
                                  <Label for="lastName" sm={2}>Last Name</Label>
                                  <Col sm={10}>
                                    <Input type="name" name="name" id="lastName" />
                                  </Col>
                            </FormGroup>
                            <FormGroup row>
                                  <Label for="email" sm={2}>Email</Label>
                                  <Col sm={10}>
                                    <Input type="email" name="email" id="email" />
                                  </Col>
                            </FormGroup>
                            <FormGroup row>
                                  <Label for="password" sm={2}>Password</Label>
                                  <Col sm={10}>
                                    <Input type="password" name="password1" id="password1" />
                                  </Col>
                            </FormGroup>
                            <FormGroup row>
                                  <Label for="password" sm={2}>Re-type Password</Label>
                                  <Col sm={10}>
                                    <Input type="password" name="password2" id="password2" />
                                  </Col>
                            </FormGroup>
                            <Button color="primary" size="lg" block type="submit">Sign up!</Button>
                        </Form>
                        </CardBody>


                  </Card>
            </div>
        );
    }
};
export default Dimensions()(Signup)
