import React from 'react';
import { Component, Card, CardImg, CardText, CardBody,
  CardTitle, CardLink, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import Dimensions from 'react-dimensions';
import GMap from './Map';

var button;

class Run_Feed extends React.Component {
    render() {
        return (
            <div>
              <Card>
                <CardBody>
                  <CardTitle tag="h2"><strong>{this.props.title}</strong></CardTitle>
                  <CardSubtitle>{this.props.city}</CardSubtitle>
                </CardBody>

                <GMap
                  isMarkerShown
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD_asy-3A0f-RszG3SmR8lpWpsFmdFLsQA&v=3.exp&libraries=geometry,drawing,places"
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `400px` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                  zoom={this.props.zoom}
                  lat={this.props.lat}
                  lng={this.props.lng}
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
