import React from 'react';
import { Component, Card, CardImg, CardText, CardBody,
    CardTitle, CardLink, CardSubtitle, Button, Form,
    FormGroup, Label, Input, FormText, Alert} from 'reactstrap';
import { Link, Redirect, Route, Router, browserHistory } from 'react-router';
import GMap from './Map';
import PlacesWithStandaloneSearchBox from './Search';
const request = require('superagent');

import { Path } from './../containers/App'



class Create extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            viewport: {
              height: 400,

              zoom: 12
          },
          zoom: 12,
          value: null,
          city: "Boston, MA, USA",
          latitude: 42.36,
          longitude: -71.06,
          redirect: false,
          route: ""
      };
    }


    setLatLng = (places) => {
        // console.log(places[0])
        this.setState(
            {city: places[0].formatted_address,
             latitude: places[0].geometry.location.lat(),
             longitude: places[0].geometry.location.lng()
            }
        )
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log("HERE");

        let title = e.target[0].value;
        let desc = e.target[1].value;
        let search = e.target[2].value;

        request
            .post('/api/paths')
            .send({
                title: title,
                description : desc,
                location_name : search,
                lat : this.state.latitude,
                lng : this.state.longitude
            })
            .then((res) => {
                // console.log("Result: " + res.body.insertId);
                // console.log("Type: " + typeof res.body.insertId);
                const route = "/paths/" + res.body.insertId;
                // console.log(route);
                this.setState(
                    {
                        redirect: true,
                        route: route
                    }
                )
                // console.log(this.state);
            });
    }

    render() {
        const redirect = this.state.redirect;
        // console.log("First: " + this.state);
        if(redirect) {
            return(
                <Router history={browserHistory}>
                    <Redirect from='/create' to={this.state.route}/>
                    <Route path='/paths/:pathid' component={Path}/>
                </Router>
            );
        }
        return (
            <div>
                <h1>Create a New Run</h1>
                  <Card>
                        <CardBody>
                                <Form onSubmit={this.handleSubmit}>
                                    <FormGroup>
                                          <Label for="title">Title</Label>
                                          <Input type="plaintext" name="title" id="title" />
                                    </FormGroup>
                                    <FormGroup>
                                          <Label for="description">Description</Label>
                                          <Input type="textarea" name="description" id="description" />
                                    </FormGroup>

                                    <PlacesWithStandaloneSearchBox
                                        label={"City"}
                                        sendValues={this.setLatLng}
                                    />
                                    {''}
                                    <Alert color="primary">{this.state.city}</Alert>

                                    <GMap
                                      isMarkerShown={true}
                                      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD_asy-3A0f-RszG3SmR8lpWpsFmdFLsQA&v=3.exp&libraries=geometry,drawing,places"
                                      loadingElement={<div style={{ height: `100%` }} />}
                                      containerElement={<div style={{ height: `400px` }} />}
                                      mapElement={<div style={{ height: `100%` }} />}
                                      zoom={this.state.zoom}
                                      lat={this.state.latitude}
                                      lng={this.state.longitude}
                                    />
                                    {''}
                                    <br></br>
                                    <br></br>
                                    <Button color="primary" size="lg" block type="submit">Create Run!</Button>
                                </Form>
                        </CardBody>


                  </Card>
            </div>
        );
    }
};
export default Create
