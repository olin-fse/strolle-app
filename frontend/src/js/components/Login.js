import React from 'react';
import { Container, Row, Col, Component, Card, CardImg, CardText, CardBody,
    CardTitle, CardLink, CardSubtitle, Button, Form,
    FormGroup, Label, Input, FormText, Alert} from 'reactstrap';
import Dimensions from 'react-dimensions';
import { Link, Redirect, Route, Router, browserHistory } from 'react-router';
const request = require('superagent');


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            route: ''
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let email = e.target[0].value;
        let password = e.target[1].value;


        request
            .post('api/login')
            .send({
                email: email,
                password: password
            })
            .then((res) => {
                console.log(res.body.insertId);
                const route = "/users/" + res.body.insertId;
                this.setState(
                    {
                        redirect: false,
                        route: route
                    }
                )
            });
    }


    render() {
        const redirect = this.state.redirect;
        console.log(redirect);
        if(redirect) {
            return(
                <Router history={browserHistory}>
                    <Redirect from="/signup" to={this.state.route}/>
                    <Route path='/users/:userid' component={User}/>
                </Router>
            );
        }


        return (
            <div>
                <h1>Login to Strolle</h1>
                  <Card>
                        <CardBody>
                            <Container>
                                <Row>
                                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                                        <Form onSubmit={this.handleSubmit}>
                                            <FormGroup>
                                                <Label for="email">Email</Label>
                                                <Input type="email" name="email" id="email" />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="password">Password</Label>
                                                <Input type="password" name="password" id="password" />
                                            </FormGroup>
                                            <Button color="primary" size="lg" block type="submit">Login</Button>
                                        </Form>
                                    </Col>
                                </Row>
                            </Container>
                        </CardBody>


                  </Card>
            </div>
        );
    }
};
export default Dimensions()(Login)
