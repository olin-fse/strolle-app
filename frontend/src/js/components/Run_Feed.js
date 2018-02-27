import React from 'react';
import { Component, Card, CardImg, CardText, CardBody,
  CardTitle, CardLink, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import Dimensions from 'react-dimensions';
import GMap from './Map';

var button;

class Run_Feed extends React.Component {

    state = {
        viewport: {
            width: this.props.containerWidth,
          latitude: this.props.lat,
          longitude: this.props.lng,
          zoom: this.props.zoom
        }
      };

    render() {
        const MapboxAccessToken = 'pk.eyJ1IjoicHNlZ2VyIiwiYSI6ImNqZDlsMndiMjYxYWYyd24ycTVvaG1hbHoifQ.LVL_EXnvKNDCKGr-emYKQQ';

        return (
            <div>
              <Card>
                <CardBody>
                  <CardTitle tag="h2"><strong>{this.props.title}</strong></CardTitle>
                  <CardSubtitle>{this.props.city}</CardSubtitle>
                </CardBody>

                <GMap
                  isMarkerShown
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCvGWiDsRg9t8L_4EKFMfLvcHmosedcEhE&v=3.exp&libraries=geometry,drawing,places"
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `400px` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                  zoom={this.state.viewport.zoom}
                  lat={this.state.viewport.latitude}
                  lng={this.state.viewport.longitude}
                />

                <CardBody>
                  <CardText>{this.props.description}</CardText>
                  <CardText>ID: {this.props.pathid}</CardText>
                  <Link href={`paths/${this.props.pathid}`}><Button color="primary">Learn More</Button></Link>
                </CardBody>
              </Card>
            </div>
        );
    }
};
export default Dimensions()(Run_Feed)
