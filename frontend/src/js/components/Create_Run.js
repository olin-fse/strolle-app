import React from 'react';
import { Component, Card, CardImg, CardText, CardBody,
    CardTitle, CardLink, CardSubtitle, Button, Form,
    FormGroup, Label, Input, FormText, Alert} from 'reactstrap';
import { Link } from 'react-router';
import GMap from './Map';
import PlacesWithStandaloneSearchBox from './Search';



class Create extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            viewport: {
              height: 400,

              zoom: 12
          },
          value: null,
          city: "Boston, MA, USA",
          latitude: 42.36,
          longitude: -71.06
      };
    }


    setLatLng(places) {
        console.log(places[0])
        this.setState(
            // {latitude: places.geometry.location.lat(), longitude: places.geometry.location.lng()}
            {city: places[0].formatted_address,
             latitude: places[0].geometry.location.lat(),
             longitude: places[0].geometry.location.lng()
            }
        )
    };

    render() {
        return (
            <div>
                <h1>Create a New Run</h1>
                  <Card>
                        <CardBody>
                                <FormGroup>
                                      <Label for="title">Title</Label>
                                      <Input type="plaintext" name="title" id="title" />
                                </FormGroup>
                                <FormGroup>
                                      <Label for="description">Description</Label>
                                      <Input type="textarea" name="description" id="title" />
                                </FormGroup>
                                <Form inLine>
                                    <PlacesWithStandaloneSearchBox
                                        label={"City"}
                                        sendValues={this.setLatLng}
                                    />
                                    {''}
                                    <Alert color="primary">{this.state.city}</Alert>

                                    <GMap
                                      isMarkerShown={true}
                                      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCvGWiDsRg9t8L_4EKFMfLvcHmosedcEhE&v=3.exp&libraries=geometry,drawing,places"
                                      loadingElement={<div style={{ height: `100%` }} />}
                                      containerElement={<div style={{ height: `400px` }} />}
                                      mapElement={<div style={{ height: `100%` }} />}
                                      zoom={this.state.viewport.zoom}
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
