import React from 'react';
import { Col, Component, Card, CardImg, CardText, CardBody,
    CardTitle, CardLink, CardSubtitle, Button, Form,
    FormGroup, Label, Input, FormText, Alert} from 'reactstrap';
import { Link } from 'react-router';
// import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import Dimensions from 'react-dimensions';




class Signup extends React.Component {
    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                  <Card>
                        <CardBody>
                        <Form>
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
