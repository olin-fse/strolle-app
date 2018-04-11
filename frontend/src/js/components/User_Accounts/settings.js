import React, { Component } from 'react';
import {Card, Button, Badge, CardTitle,
    CardText, Row, Col, Table, Form,
    FormGroup, Label, Input, FormText} from "reactstrap";

class Settings extends Component{
    constructor(props) {
        super(props);
        this.state = {
            edit: this.props.edit,
            firstname: this.props.firstname,
            lastname: this.props.lastname,
            email: this.props.email,
            city: this.props.city
        };
    }

    enableEdit = (e) => {
        e.preventDefault();
        this.setState({edit: true})
    }

    render() {
        if(this.state.edit) {
            return(
                <div>
                    <Form>
                        <Table>
                            <tbody>
                              <tr>
                                <th scope="row">Firstname</th>
                                <FormGroup>
                                    <Input type="name" name="firstname" id="firstname" placeholder={this.state.firstname}></Input>
                                </FormGroup>
                              </tr>
                              <tr>
                                <th scope="row">Last Name</th>
                                <FormGroup>
                                    <Input type="name" name="lastname" id="lastname" placeholder={this.state.lastname}></Input>
                                </FormGroup>
                              </tr>
                              <tr>
                                <th scope="row">Email</th>
                                <FormGroup>
                                    <Input type="email" name="email" id="email" placeholder={this.state.email}></Input>
                                </FormGroup>
                              </tr>
                              <tr>
                                <th scope="row">City</th>
                                <FormGroup>
                                    <Input type="name" name="city" id="city" placeholder={this.state.city}></Input>
                                </FormGroup>
                              </tr>
                            </tbody>
                        </Table>
                        <Button color="primary" size="lg" block type="submit">Submit</Button>
                    </Form>
                </div>
            )
        } else {
            return(
                <div>
                    <div align="right">
                        <Badge href="#" color="light" onClick={this.enableEdit}>Edit</Badge>
                    </div>
                    <Table>
                        <tbody>
                          <tr>
                            <th scope="row">Firstname</th>
                            <td>{this.state.firstname}</td>
                          </tr>
                          <tr>
                            <th scope="row">Last Name</th>
                            <td>{this.state.lastname}</td>
                          </tr>
                          <tr>
                            <th scope="row">Email</th>
                            <td>{this.state.email}</td>
                          </tr>
                          <tr>
                            <th scope="row">City</th>
                            <td>{this.state.city}</td>
                          </tr>
                        </tbody>
                    </Table>
                </div>
            );
        }
    }
}

export default Settings;
