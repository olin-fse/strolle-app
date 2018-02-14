import React from 'react';
import { Component, Card, CardImg, CardText, CardBody,
    CardTitle, CardLink, CardSubtitle, Button, Form,
    FormGroup, Label, Input, FormText} from 'reactstrap';
import { Link } from 'react-router';
import ReactMapGL from 'react-map-gl';
import Dimensions from 'react-dimensions';



class Create extends React.Component {

    state = {
        viewport: {
          width: this.props.containerWidth,
          height: 400,
          latitude: 51.5074,
          longitude: -0.1278,
          zoom: 12
        }
      };

    render() {
        const MapboxAccessToken = 'pk.eyJ1IjoicHNlZ2VyIiwiYSI6ImNqZDlsMndiMjYxYWYyd24ycTVvaG1hbHoifQ.LVL_EXnvKNDCKGr-emYKQQ';

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
                        <ReactMapGL
                            mapStyle="mapbox://styles/pseger/cjd9o709fa3ko2rnv0xz2lvnc"
                            {...this.state.viewport}
                            mapboxApiAccessToken = {MapboxAccessToken}
                            onViewportChange={(viewport) => this.setState({viewport})}
                        />
                  </Card>
            </div>
        );
    }
};
export default Dimensions()(Create)
