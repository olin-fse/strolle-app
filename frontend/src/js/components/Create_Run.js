import React from 'react';
import { Component, Card, CardImg, CardText, CardBody,
    CardTitle, CardLink, CardSubtitle, Button, Form,
    FormGroup, Label, Input, FormText} from 'reactstrap';
import { Link } from 'react-router';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import Dimensions from 'react-dimensions';
var Geocoder = require('../');


const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoicHNlZ2VyIiwiYSI6ImNqZDlsMndiMjYxYWYyd24ycTVvaG1hbHoifQ.LVL_EXnvKNDCKGr-emYKQQ"
});

class Create extends React.Component {

    state = {
        viewport: {
          width: this.props.containerWidth,
          height: 400,
          latitude: 42.36,
          longitude: -71.06,
          zoom: 12
        }
      };

    temper(value){
        this.setState({ value: value });
    }

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
                                    <FormGroup>
                                          <Label for="citysearch">City</Label>
                                          <Input type="search" name="search" id="citysearch" placeholder="Search" />
                                    </FormGroup>
                                    {''}
                                    <Button color="success" type="submit">Search</Button>
                                </Form>
                        </CardBody>
                        <Map
                          style="mapbox://styles/mapbox/streets-v9"
                          center={[this.state.viewport.longitude, this.state.viewport.latitude]}
                          zoom={[this.state.viewport.zoom]}
                          containerStyle={{
                            height: 400,
                            width: this.props.containerWidth
                          }}>
                            <Layer
                              type="symbol"
                              id="marker"
                              layout={{ "icon-image": "marker-15" }}>

                            </Layer>
                        </Map>

                  </Card>
            </div>
        );
    }
};
export default Dimensions()(Create)
