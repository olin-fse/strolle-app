import React from 'react';
import { Container, Row, Col, Component, Card, CardImg, CardText, CardBody,
    CardTitle, CardLink, CardSubtitle, Button, Form,
    FormGroup, Label, Input, FormText, Alert} from 'reactstrap';
import { Link } from 'react-router';
import Dimensions from 'react-dimensions';



class Login extends React.Component {
    render() {
        return (
            <div>
                <h1>Login to Strolle</h1>
                  <Card>
                        <CardBody>
                            <Container>
                                <Row>
                                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                                        <Form>
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
